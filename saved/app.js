const express = require("express");
const cors = require("cors");
const { Saved, Job } = require("./database.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/saved/:id", (req, res) => {
  let query = Saved.aggregate([
    { $match: { user_id: req.params.id } },
    {
      $lookup: {
        from: "jobs",
        localField: "job_id",
        foreignField: "job_id",
        as: "item",
      },
    },
  ]);
  query.exec((err, items) => {
    err ? res.sendStatus(418) : res.status(200).send(items);
  });
});
app.get('/saved/id/:id',(req,res)=>{
  Saved.find({user_id:req.params.id},(err,result)=>{
    err ? res.sendStatus(418) : res.status(200).send(result);
  })
})
app.post("/saved", (req, res) => {
  const newSaved = new Saved({
    user_id: req.body.user_id,
    job_id: req.body.item.job_id,
    level: req.body.level,
  });
  newSaved.save((err) => {
    if (err) {
      res.sendStatus(418);
    } else {
      const newInterestedJob = new Job(req.body.item);
      newInterestedJob.save((err) => {
        err ? res.sendStatus(418) : res.sendStatus(204);
      });
    }
  });
});

app.delete("/saved/:id", (req, res) => {
  Saved.deleteOne({ job_id: req.params.id }).exec((err) => {
    if (err) {
      res.sendStatus(418);
    } else {
      Job.deleteOne({ job_id: req.params.id }).exec((err) => {
        err ? res.sendStatus(418) : res.sendStatus(204);
      });
    }
  });
});

module.exports = app;

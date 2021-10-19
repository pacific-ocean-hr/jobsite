const User = require('../db/index');

const updateUser = async (req, res) => {
  const resume = req.files[0];
  let doc = await User.findOneAndUpdate({ _id: '616e2d62db1c462981449b99' }, { resume }, { new: true });

  try {
    res.send(doc);
  } catch (err) {
    console.log(err);
    res.sendStatus(404).send(new Error(err));
  }
}

module.exports = updateUser;

const User = require('../db/index');
const path = require('path');
const fs = require('fs');

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({region: 'us-west-1'});
// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

const updateUser = async (req, res, next) => {
  const resume = req.files[0];
  const { id, firstName, lastName, email } = req.body;
  // save resume to s3 bucket
  const uploadParams = {Bucket: 'jobsite-pdf-bucket', Key: '', Body: ''};
  const fileStream = fs.createReadStream(__dirname + `/../uploads/${resume.filename}`);
  uploadParams.Body = resume.path;
  uploadParams.Key = `resume_${id}.pdf`;

  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  // get url and send back to client
  s3.upload (uploadParams, async function (err, data) {
    if (err) {
      console.log("Error", err);
      res.sendStatus(404).send(new Error(err))
    } if (data) {
      console.log("Upload Success", data.Location);
      // save edits to the database
      let doc = await User.findOneAndUpdate({ _id: id }, {
        firstName,
        lastName,
        email,
        resume: data.Location,
      }, { new: true, upsert: true });

      try {
        res.send(doc);
      } catch (err) {
        console.log(err);
        res.sendStatus(404).send(new Error(err));
      }
    }
  });
}

module.exports = updateUser;

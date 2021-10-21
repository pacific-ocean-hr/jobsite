const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const savedSchema = new Schema({
  user_id: String,
  job_id: Number,
  level: {
    type: String,
    enum: [
      'interviewed',
      'applied',
      'interested',
      'very interested',
      'extremely interested',
    ],
  },
});
const jobSchema=new Schema({
  id:Number,
  job_id:Number,
  url:String,
  title:String,
  company_name:String,
  category:String,
  job_type:String,
  publication_date:String,
  candidate_required_location:String,
  salary:String,
  description:String,
  company_logo_url:String,
  tags:String,
  isLiked:Boolean
})


const Saved = model('saved', savedSchema);
const Job = model('job', jobSchema);

module.exports = {Saved,Job};

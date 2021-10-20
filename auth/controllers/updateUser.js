const User = require('../db/index');
const path = require('path');

const updateUser = async (req, res, next) => {
  const resume = req.files[0];
  const { id, firstName, lastName, email } = req.body;

  let doc = await User.findOneAndUpdate({ _id: id }, {
    firstName,
    lastName,
    email,
    resume,
  }, { new: true });

  try {
    res.send(doc);
  } catch (err) {
    console.log(err);
    res.sendStatus(404).send(new Error(err));
  }
}

module.exports = updateUser;

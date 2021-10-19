const User = require('../db/index');

const updateUser = async (req, res) => {
  let doc = await User.findOneAndUpdate({ _id: '616e2d62db1c462981449b99' }, { email: 'chris@checkr.com' }, { new: true });

  try {
    res.send(doc);
  } catch (err) {
    res.sendStatus(404).send(new Error(err));
  }
}

module.exports = updateUser;

const { getJoblistings } = require('../model');

module.exports = {
  handleJoblisting: (req, res) => {
    const query = !!req.query ? req.query : '';

    getJoblistings(query, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}
// src/routes/api/get.js

const { createSuccessResponse } = require('../../response');

module.exports = (req, res) => {
  // TODO: this is just a placeholder to get something working
  res.status(200).json(
    createSuccessResponse({
      fragments: [],
    })
  );
};

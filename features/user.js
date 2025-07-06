const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(300).send('user')
})

module.exports = router;
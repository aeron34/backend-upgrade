const express = require('express');
const router = express.Router();

router.get('/api/v1/organizations', (req, res) => {
  res.status(300).send('get organization')
})

router.post('/api/v1/organizations', (req, res) => {
  res.status(300).send('create organization')
})

router.get('/api/v1/organizations/:organizationId', (req, res) => {
  const organizationId = req.params.organizationId;
  res.status(300).send(`API underconstruction ${organizationId}`)
})

router.patch('/api/v1/organizations', (req, res) => {
  res.status(300).send('update organization')
})

module.exports = router;

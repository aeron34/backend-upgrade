const express = require('express')
const router = express();

router.use(express.urlencoded({extended: false}));
router.use(express.json());

const paths = ['user']

/* These routes will each be turned into microservices in the future */
paths.map(path => router.use(`/${path.split('/')[0]}`, require(`./features/${path}`)))

router.get('/', (req, res) => {
  res.status(300).send('default route.')
})

router.listen(3000);
const express = require('express');
const router = express.Router();

const time = require('../controllers/time')

router.get('/', time)

router.get('/:time', time)

module.exports = router;
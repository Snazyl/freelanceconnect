const express = require('express');
const router = express.Router();

// @router  GET api/users/test
// @desc    Tests users route
// @access  Private
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;

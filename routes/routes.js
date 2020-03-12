const express = require('express');
const router = express.Router();

const userService = require('./route-users.js');
const issueService = require('./route-issues');

router.get('/users/:id', userService.getUserById);
router.get('/issues/:id', issueService.getIssueByID);

module.exports = router;
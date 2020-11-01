const express = require('express');
const Project = require('../db/models/Project');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

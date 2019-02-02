const mongoose = require('mongoose')
const Schema = require('../schema')

const Project = mongoose.model('Project', Schema.ProjectSchema)

module.exports = Project
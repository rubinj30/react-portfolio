const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  github: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
  image: {
    name: String,
    style: String,
  },
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = {
  ProjectModel,
};

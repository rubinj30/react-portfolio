require('dotenv').config();

// const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

// Database setup
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.on('open', () => {
//   console.log('Mongoose Connected Successfully');
// });

// connection.on('error', (error) => {
//   console.log(error);
// });

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build/'));

const ReposController = require('./routes/repos');
app.use('/api/repos', ReposController);

// const ProjectsController = require('./routes/projects');
// app.use('/api/projects', ProjectsController);

app.get('*', (_req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT);
});

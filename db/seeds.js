require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Project = require('./models/Project');

const blackjack = new Project({
  name: 'Jack Black BlackJack',
  link: 'https://jackblackblackjack.netlify.com',
  github: 'https://github.com/rubinj30/Blackjack',
  image: {
    name: 'blackjack',
    style: 'br3',
  },
  description: '',
});

const connect4 = new Project({
  name: 'Connect 4',
  link: 'https://connect-4-ts.herokuapp.com/',
  github: 'https://github.com/rubinj30/connect4',
  image: {
    name: 'connect4',
    style: 'br1',
  },
  description: '',
});

const investments = new Project({
  name: 'StockUp Investment Tracker',
  link: 'https://stock-up-app.herokuapp.com/',
  github: 'https://github.com/rubinj30/investment_app_mern',
  image: {
    name: 'investments',
    style: 'br1',
  },
  description:
    'This was my attempt to make an app on which I could easily track the performance of my investments.\
            Most investment applications provide a lot of information and you can trade securities from it. \
            But the user-interfaces are usually horrible and typically people are just checking the performance of their stocks, or for any news related to them.\
    ',
});

const climbing = new Project({
  name: 'partner-in-climb',
  link: 'https://partner-in-climb.herokuapp.com/',
  github: 'https://github.com/rubinj30/partner-in-climb',
  image: {
    name: 'climb',
    style: 'br1',
  },
  description:
    'This was my attempt to make an app on which I could easily track the performance of my investments.\
            Most investment applications provide a lot of information and you can trade securities from it. \
            But the user-interfaces are usually horrible and typically people are just checking the performance of their stocks, or for any news related to them.\
    ',
});

Project.deleteMany({})
  .then(() => connect4.save())
  .then(() => investments.save())
  .then(() => climbing.save())
  .then(() => blackjack.save())
  .then(() => console.log('SEEDED DATABASE'))
  .then(() => mongoose.connection.close());

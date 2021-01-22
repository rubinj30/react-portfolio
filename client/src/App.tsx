import { FC, useEffect, useState } from 'react';
import Header from './components/molecules/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/pages/home-page/home-page.component';
import { Projects } from './components/pages/projects/projects.component';
import { About } from './components/pages/about/about.component';
import { Contact } from './components/pages/contact/contact.component';
import './App.css';
import axios from 'axios';

const App: FC = () => {
  const [repos, setRepos] = useState([]);

  function geoFindMe() {
    console.log("geoFindMe")
    function success(position) {
      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      console.log("HELLO", position)
    }

    function error() {
      console.log("ERROR")
    }

    if (!navigator.geolocation) {
      console.log("NO GEO LOCATION")
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  useEffect(() => {
    geoFindMe()
    // if (!Boolean(repos.length))
    //   axios.get('/api/repos').then((resp) => {
    //     setRepos(resp.data)
    //   });
  }, [])

  return (
    <Router>
      <div>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React, { FC } from 'react';
import Header from './components/molecules/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/pages/home-page/home-page.component';
import { Projects } from './components/pages/projects/projects.component';
import { About } from './components/pages/about/about.component';
import { Contact } from './components/pages/contact/contact.component';
import './App.css';

const App: FC = () => {
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
}

export default App;

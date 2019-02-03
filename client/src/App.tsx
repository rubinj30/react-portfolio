import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/pages/home-page/home-page.component';
import { Projects } from './components/pages/projects/projects.component';
import { About } from './components/pages/about/about.component';
import { Contact } from './components/pages/contact/contact.component';
import './App.css';

type State = {
    isPagesDropdownOpen: boolean;
};

class App extends Component<{}, State> {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

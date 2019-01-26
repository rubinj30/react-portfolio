import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/pages/home-page/home-page.component';
import { Projects } from './components/pages/projects/projects.component';
import { About } from './components/pages/about/about.component';
import { Contact } from './components/pages/contact/contact.component';
import './App.css';

class App extends Component {
    state = {
        isPagesDropdownOpen: false
    };

    public wrapRef;
    constructor(props) {
        super(props);
        this.wrapRef = React.createRef();
    }

    toggleDropdown = () => {
        this.setState(
            ({ isPagesDropdownOpen }: { isPagesDropdownOpen: boolean }) => {
                return { isPagesDropdownOpen: !isPagesDropdownOpen };
            }
        );
    };

    handleClickOutside = (event: MouseEvent) => {
        if (this.wrapRef && !this.wrapRef.contains(event.target)) {
            this.toggleDropdown();
        }
    };

    setRef = r => {
        this.wrapRef = r;
    };

    render() {
        return (
            <Router>
                <div>
                    <Header
                        setRef={this.setRef}
                        showDropdown={this.toggleDropdown}
                        isPagesDropdownOpen={this.state.isPagesDropdownOpen}
                        handleClickOutside={this.handleClickOutside}
                    />
                    <Route />
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

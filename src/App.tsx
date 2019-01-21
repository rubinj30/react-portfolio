import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.component';
import { Dropdown } from './components/molecules/dropdown/dropdown.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/pages/home-page/home-page.component';
import { Projects } from './components/pages/projects/projects.component';

class App extends Component {
    state = {
        isDropdownOpen: false
    };

    public wrapRef;
    constructor(props) {
        super(props);
        this.wrapRef = React.createRef();
    }

    toggleDropdown = () => {
        this.setState(({ isDropdownOpen }: { isDropdownOpen: boolean }) => {
            return { isDropdownOpen: !isDropdownOpen };
        });
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
                        isDropdownOpen={this.state.isDropdownOpen}
                        handleClickOutside={this.handleClickOutside}
                    />
                    <Route />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

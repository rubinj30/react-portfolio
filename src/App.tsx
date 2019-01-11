import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.component';
import { Dropdown } from './components/molecules/dropdown/dropdown.component';
import './App.css';

class App extends Component {
    state = {
        dropdownOpen: true
    };

    toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
        this.setState(({ dropdownOpen }: { dropdownOpen: boolean }) => {
            return { dropdownOpen: !dropdownOpen };
        });
    };

    render() {
        return (
            <div>
                <Header
                    toggleDropdown={this.toggleDropdown}
                    dropdownOpen={this.state.dropdownOpen}
                />
                {this.state.dropdownOpen && <Dropdown />}
            </div>
        );
    }
}

export default App;

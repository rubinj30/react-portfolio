import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.component';
import { Dropdown } from './components/molecules/dropdown/dropdown.component';
import './App.css';

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

    showDropdown = () => {
        this.setState({ isDropdownOpen: true });
    };

    hideDropdown = () => {
        this.setState({ isDropdownOpen: false });
    };

    handleClickOutside = (event: MouseEvent) => {
        if (this.wrapRef && !this.wrapRef.contains(event.target)) {
            console.log('clicking');
            this.hideDropdown();
        } else {
            console.log('not outside');
        }
    };

    setRef = r => {
        this.wrapRef = r;
    };

    render() {
        return (
            <div>
                <Header
                    setRef={this.setRef}
                    showDropdown={this.showDropdown}
                    isDropdownOpen={this.state.isDropdownOpen}
                />
                {this.state.isDropdownOpen && (
                    <Dropdown
                        setRef={this.setRef}
                        handleClickOutside={this.handleClickOutside}
                    />
                )}
            </div>
        );
    }
}

export default App;

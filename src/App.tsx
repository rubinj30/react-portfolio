import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.component';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="flex justify-center">
                <Header />
            </div>
        );
    }
}

export default App;

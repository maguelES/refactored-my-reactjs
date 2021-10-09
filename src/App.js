import React from 'react';
import './App.css';
import PrimaryLayout from "./app/layout/primary/PrimaryLayout";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <PrimaryLayout/>
            </div>
        );
    }
}

export default App;


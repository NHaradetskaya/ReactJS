import Header from './components/Header';
import Card from './components/Card';
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header name="Animals" />
                <div style={{ margin: '30px 10px' }}>
                    <Card name="Lion">Some text</Card>
                </div>
            </div>
        );
    }
}

export default App;

import Header from './components/Header';
import Card from './components/Card';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        animals: [
            { name: 'Lion', description: 'Some text' },
            { name: 'Cat', description: 'Some text' },
            { name: 'Ferret', description: 'Some text' },
            { name: 'Dog', description: 'Some text' },
            { name: 'Opossum', description: 'Some text' },
            { name: 'Mouse', description: 'Some text' },
            { name: 'Tiger', description: 'Some text' },
            { name: 'Horse', description: 'Some text' },
        ],
        viewCheck: false,
    };

    switchView = () => {
        this.setState({
            viewCheck: !this.state.viewCheck,
        });
    };

    render() {
        const { viewCheck, animals } = this.state;
        return (
            <>
                <Header name="Animals" />
                <div style={{ fontSize: 20 }}>
                    <input
                        className="checkbox__view"
                        type="checkbox"
                        id="view"
                        checked={viewCheck}
                        onChange={this.switchView}
                    />
                    <label for="view">View only</label>
                </div>
                <div className="cards">
                    {animals.map((animal, index) => (
                        <Card
                            name={animal.name}
                            viewCheck={viewCheck}
                            key={index}
                        >
                            {animal.description}
                        </Card>
                    ))}
                </div>
            </>
        );
    }
}

export default App;

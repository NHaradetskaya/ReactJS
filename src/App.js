import Header from './components/Header';
import Card from './components/Card';
import React, { Component } from 'react';
import MainChekbox from './components/MainCheckbox';
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
                <MainChekbox
                    viewCheck={viewCheck}
                    switchView={this.switchView}
                />
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

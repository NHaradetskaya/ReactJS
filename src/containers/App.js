import Header from '../components/Header';
import React, { Component } from 'react';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import Error from '../components/Error';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SingleCard from '../components/SingleCard/SingleCard';
import Settings from '../components/Settings';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header name="Pokemons" />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/card/:id" component={SingleCard} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

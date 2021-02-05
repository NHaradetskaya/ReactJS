import Header from '../components/Header';
import React, { Component } from 'react';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import Error from '../components/Error';
import { CardsContextProvider } from '../context/card-context';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <CardsContextProvider>
                    <Header name="Pokemons" />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route component={Error} />
                    </Switch>
                </CardsContextProvider>
            </BrowserRouter>
        );
    }
}

export default App;

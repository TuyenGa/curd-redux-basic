import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import GamePage from '../container/game-page';

export default class App extends Component {
    render(){
        return (
            <div>
                <Link to="games">Games</Link>
                <Route path="/games" component={GamePage}></Route>
            </div>
        )
    }
}
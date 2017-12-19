import React,{ Component } from 'react';
import { connect } from 'react-redux';
import GameList from './game-list'
import PropTypes from 'prop-types';
import { fetchGame } from '../actions/index'

class GamePage extends Component {

    componentDidMount() {
        this.props.fetchGame();
    }
    

    render(){
        return(
            <div>
                <h1>Game List</h1>
                <GameList games={this.props.games}/>
            </div>
        );
    }
}
GamePage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGame: PropTypes.func.isRequired
}
const mapStateToProps = ({ games }) => ({
    games
})

export default connect(mapStateToProps,{ fetchGame })(GamePage);
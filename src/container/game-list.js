import React from 'react';
import PropTypes from 'prop-types';

export default function GameList ({ games }) {
   const emptyMessage = (
       <p>There are no games yet in your collection</p>
   );

   const gamesList = (
       <p>games list</p>
   );

   return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
   )
}

GameList.propTypes = {
    games : PropTypes.array.isRequired
}
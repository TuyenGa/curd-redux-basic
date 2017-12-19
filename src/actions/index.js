
export const fetchGame = () => {
    return dispatch => {
       fetch('/api/games');
    }
}
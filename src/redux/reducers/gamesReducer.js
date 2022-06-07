const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

export const FETCH_GAMES = 'FETCH_GAMES'


const gamesReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
        default :
            return {...state}
    }
}

export default gamesReducer;

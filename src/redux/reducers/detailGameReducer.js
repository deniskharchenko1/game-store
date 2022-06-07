const initialState = {
    game: { platforms: []},
    screen: { results: []},
    isLoading: true,
}

export const FETCH_DETAIL_GAME = 'FETCH_DETAIL_GAME'
export const LOADING_DETAIL = 'LOADING_DETAIL'

const detailGameReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOADING_DETAIL:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DETAIL_GAME:
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            }
        default :
            return {...state}
    }
}

export default detailGameReducer;

import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL} from '../../api';
import {FETCH_GAMES} from "../reducers/gamesReducer";

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newGamesData = await axios.get(newGamesURL())

    dispatch({
        type: FETCH_GAMES,
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingData.data.results,
        }
    })
}

import axios from "axios";
import {detailGameURL, screenshotsGameURL} from '../../api';
import {FETCH_DETAIL_GAME, LOADING_DETAIL} from "../reducers/detailGameReducer";

export const loadDetailGame = (id) => async (dispatch) => {
    dispatch({
        type: LOADING_DETAIL,
    })
    const detailGameData = await axios.get(detailGameURL(id))
    const screenshotsGameData = await axios.get(screenshotsGameURL(id))

    dispatch({
        type: FETCH_DETAIL_GAME,
        payload: {
            game: detailGameData.data,
            screen: screenshotsGameData.data
        }
    })
}

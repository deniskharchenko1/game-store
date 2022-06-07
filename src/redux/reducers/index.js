import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import detailGameReducer from "./detailGameReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailGameReducer,
})

export default rootReducer;


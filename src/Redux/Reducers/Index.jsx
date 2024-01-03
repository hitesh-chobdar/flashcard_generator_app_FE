import { combineReducers } from "redux";
import flashcardReducers from "./Reducers";


const rootReducer = combineReducers({
    flashcardReducers:flashcardReducers,
})

export default rootReducer;
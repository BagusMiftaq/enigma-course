import {combineReducers} from "redux";
import courseReducer from "./reducers/courseReducer";
import typeReducer from "./reducers/typeReducer";

const rootReducer = combineReducers({
    courses : courseReducer,
    coursesType : typeReducer
})

export default rootReducer;
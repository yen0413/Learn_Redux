import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//在此處合併所有的reducer
const rootReducers  = combineReducers({
    //自訂名稱 : 來源名稱
    counter : counterReducer,
    isLogged :　loggedReducer
});
export default rootReducers;
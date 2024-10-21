import { combineReducers } from "redux";
import { AuthDetails } from "./auth";
import PopupDetails from "./popup";
import { FormDetails } from "./formDetails";
import loaderReducer from "./loader";

export default combineReducers({
    auth: AuthDetails,
    popup: PopupDetails,
    loader: loaderReducer,
    FormDetails,
})

import { handleActions } from "redux-actions";
import {SET_TOKEN} from "../constants/actionTypes";

export default handleActions(
    {
        [SET_TOKEN]: (state, action) => action.payload.token,
    },
    {}
);

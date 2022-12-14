import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"

export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = ()=>({
    type: LOGIN_FAILURE
});
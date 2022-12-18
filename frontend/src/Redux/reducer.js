import { loadData, saveData } from "../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE } from "./actionTypes"

const token = loadData("token")

const iniState = {
    isAuth : token?true:false,
    token: token || ""
}

export const authReducer = (state=iniState,{type,payload})=>{
    switch (type) {
        case LOGIN_SUCCESS:
            saveData("token",payload)
            return{
                ...state,
                isAuth : true,
                token: payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isAuth:false,
                token:""
            }
            case ADMIN_LOGIN_REQUEST:
                return{
                    ...state,
                    isAdmin:false
                }
            case ADMIN_LOGIN_SUCCESS:
                return{
                    ...state,
                    isAuth:true,
                    isAdmin:true
                }
            case ADMIN_LOGIN_FAILURE:
                return{
                    ...state,
                    isAdmin:false
                }   
    
        default:
            return state;
    }
}
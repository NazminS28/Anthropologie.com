import { LOGIN_FAILURE, LOGIN_SUCCESS,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE } from "./actionTypes"

export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = ()=>({
    type: LOGIN_FAILURE
});


const adminLoginRquest =  () =>{
    return{
        type:ADMIN_LOGIN_REQUEST
    }
}

const adminLoginSuccess = (payload) =>{
    return {
        type:ADMIN_LOGIN_SUCCESS,
        payload
    }
}

const adminLoginFailure = () =>{
    return{
        typep:ADMIN_LOGIN_FAILURE
    }
}

// export {loginSuccess,loginFailure,adminLoginSuccess};
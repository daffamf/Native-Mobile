import { LOGIN,LOGIN_FAILURE,LOGIN_SUCCESS } from "../constants";

//login user

export const login =(payload)=>({
    type:LOGIN,
    ...payload
})
export const loginSuccess =(data,token,message)=>({
    type:LOGIN_SUCCESS,
    data,token,message
    
})
export const loginFailure =(data)=>({
    type:LOGIN_FAILURE,
    data
})
import { 
    LOGIN, LOGIN_FAILURE ,LOGIN_SUCCESS,
    HOME_DATA ,HOME_FAILURE,HOME_SUCCESS,

} from "../constants";

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

// HOME
export const homeData =(payload)=>({
    type:HOME_DATA,
    ...payload
})
export const homeSuccess =(data,message)=>({
    type:HOME_SUCCESS,
    data,message
    
})
export const homeFailure =(data)=>({
    type:HOME_FAILURE,
    data
}) 
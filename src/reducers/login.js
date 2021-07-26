import{
    LOGIN_SUCCESS,
    LOGIN_FAILURE
}from '../constants'

const intialState={
  data:false,
  tokenValue:undefined
}

const login =(state = intialState ,action)=>{
    const {type,data,token,message}=action
    switch (type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                data,
                token,
                message
            }
            
           case LOGIN_FAILURE:
               return{
                   ...state,
                   message:data
               }
    
        default:
            return state
    }
}

export default login
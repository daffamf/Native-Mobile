import { all,takeEvery,put,call } from "@redux-saga/core/effects";
import * as action from '../actions'
import { request } from "../actions/connect";
import { LOGIN,LOGOUT,PATH_API ,HOME_DATA} from "../constants";



const postAuth = async (path, params)=>{
    try {
        const responese = await request.post(path,params)
        return responese.data
    } catch (error) {
        console.log(error)
        return error
        
    }
}

function* login(payload){
    const {email,password,navigation}=payload
    try {
        
        const {data,message,token}= yield call(postAuth, `${PATH_API}user/login`,{email,password})
        if(message !== 'Success!'){
            yield put(action.loginFailure(message))
            return
        }
        yield put(action.loginSuccess(data,token,message))
        navigation.reset({
            index:0,
            routes:[{name:'Home Screen'}]
        })
    } catch (error) {
        console.log(error)
        yield put (action.loginFailure(error))
        return
    }
  
}




export default function* rootsaga() {
    yield all([
        takeEvery(LOGIN,login)
    ])
}
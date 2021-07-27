import{
    HOME_SUCCESS,
    HOME_FAILURE
}from '../constants'

const initialState = {
    data: false,
    msg: undefined
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case HOME_SUCCESS:
            return {
                ...state,
                data,
                msg: action.message,
            }
        case HOME_FAILURE:
            return state
        default:
            return state;
    }
};
export default home;

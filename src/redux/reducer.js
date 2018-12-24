import { types }  from './types';

let initialState={

}

const reducer= (state=initialState,actions)=>{
    switch(actions.type){
        case types.SET_DOCTOR_LIST:
        return Object.assign({},state, {
            'doctor_list':actions.text
        });
        case types.ALTER_DOCTOR_LIST:
        return Object.assign({},state, {
            'search_list':{
                data:actions.text
            }
        });
        default:
        return state
    }
}

export default reducer
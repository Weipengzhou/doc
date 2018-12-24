import {  put, takeLatest,call } from 'redux-saga/effects';
import { types } from './types';
import * as actions from './actions';
import * as apis from '../api/api';
import Search from '../Components/Search'
function* getDoctorList({text}){
    try{
        const result = yield call(apis.getDoctorList,text)
        yield put(actions.SetDoctorList(result))
     
    }catch(err){
        console.log(err)
    }
}
function* getSearchList({text}){
    try{
        const result = yield call(Search,text)
        console.log(result)
        yield put(actions.AlterDoctorList(result))
       
    }catch(err){

    }
}
export default function* defaultSaga() {
    yield [
        takeLatest(types.GET_DOCTOR_LIST, getDoctorList),
        takeLatest(types.GET_SEARCH_LIST, getSearchList),
    ];
}
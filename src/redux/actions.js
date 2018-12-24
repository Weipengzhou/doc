import {types} from './types';
export const GetDoctorList = text => ({ type: types.GET_DOCTOR_LIST, text })  
export const SetDoctorList = text => ({ type: types.SET_DOCTOR_LIST, text })
export const GetSearchList = text => ({ type: types.GET_SEARCH_LIST, text })
export const AlterDoctorList=text => ({ type: types.ALTER_DOCTOR_LIST,text})
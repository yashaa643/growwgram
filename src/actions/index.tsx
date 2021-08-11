import { Dispatch } from 'react';

import unsplash from '../api/unsplash';
import {
  Terror,
  TfetchPosts,
  TfetchUser,
} from '../types';

export const fetchPosts = () => async (dispatch: Dispatch<TfetchPosts | Terror> ) => {
    const response = await unsplash.get('/photos/random', {
        params: {
            count: 10
        },
    }).catch(function (error) {
        if (error.response) {
            if(error.response.status===401){
                dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : "401"}})
            }                      //request was made but server responded with status code different then 2xx
            else if(error.response.status===404){
                dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : "404"}})
            }
        } else if (error.request) {                 //request was made but no response received
            dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : error.message}})
        } else {                                    //error in request config
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
    if (response)
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = (username: string) => async (dispatch: Dispatch<TfetchUser | Terror>) => {

    const url = '/users/' + username;
    const response = await unsplash.get(url, {
        params: {
            username: username,
        },
    }).catch(function (error) {
        if (error.response) {
            if(error.response.status===401){
                dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : "401"}})
            }                      //request was made but server responded with status code different then 2xx
            else if(error.response.status===404){
                dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : "404"}})
            }
        } else if (error.request) {                 //request was made but no response received
            dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : error.message}})
        } else {                                    //error in request config
            console.log('Error', error.message);
        }
        console.log(error.config);
    });

    if (response) {
        dispatch({ type: 'FETCH_USER', payload: response.data });
    }
}

export const clearUser = () => (dispatch: Dispatch<TfetchUser>) => {
    dispatch({ type: 'CLEAR_USER', payload: {} });
}

export const clearUserPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
    dispatch({ type: 'CLEAR_USER_POSTS', payload: [] });
}

export const fetchAUserPosts = (username: string, page: number) => async (dispatch: Dispatch<TfetchPosts | Terror>) => {
    const url = '/users/' + username + '/photos';
    const response = await unsplash.get(url, {
        params: {
            username: username,
            page: page,
            per_page: 9
        },
    }).catch(function (error) {
        if (error.response) {
            if(error.response.status===401){
                dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : "401"}})
            }                      //request was made but server responded with status code different then 2xx
            else if(error.response.status===404){
                dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : "404"}})
            }
        } else if (error.request) {                 //request was made but no response received
            dispatch({type: 'FETCH_USER_ERROR', payload: {err : true , errMessage : error.message}})
        } else {                                    //error in request config
            console.log('Error', error.message);
        }
        console.log(error.config);
    });;

    if(response)
        dispatch({ type: 'FETCH_USER_POSTS', payload: response.data });
}

export const clearPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
    dispatch({ type: 'CLEAR_POSTS', payload: [] });
}



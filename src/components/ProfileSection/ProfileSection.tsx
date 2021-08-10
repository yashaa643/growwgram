import './profileSection.css';

import React, { useEffect } from 'react';

import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import {
  useHistory,
  useParams,
} from 'react-router-dom';

import {
  clearUser,
  fetchUser,
} from '../../actions';
import NotFound from '../../errors/NotFound/NotFound';
import {
  storeState,
  user,
} from '../../types';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';

type paramTypes = {
    username: string;
}

type propTypes = {
    clearUser: () => void,
    fetchUser: (username: string) => void,
    user: user,
    error: boolean,
}


const ProfileSection = ({ clearUser, fetchUser, user, error }: propTypes) => {
    const { username } = useParams<paramTypes>();
    const { total_photos } = user;

    useEffect(() => {
        console.log("Inside UseEffect")
        fetchUser(username);
        return (() => {
            clearUser();
        })
    },[clearUser,fetchUser,username])

    const userIsEmpty = Object.keys(user).length === 0 && user.constructor === Object;

    const history = useHistory();

    console.log(error);

    if (error) {
        return (
            <NotFound />
        )
    }

    else {
        if(userIsEmpty){
            return (
                <div><Loader
                type="ThreeDots"
                color="#BBBBBB"
                height={50}
                width={50}
                timeout={3000} //3 secs
            /></div> 
            ) 
        }
        else return(
            <>
                <UserDetails user={user}></UserDetails>
                <UserPosts history={history} username={username} pages={Math.ceil(total_photos / 9)} />
            </>
        )

}
}

const mapStateToProps = (state: storeState) => {
    const { user, error } = state;
    return { user: user, error: error };
}

export default connect(mapStateToProps, {
    fetchUser,
    clearUser
})(ProfileSection);




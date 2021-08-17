import './profileSection.css';

import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import NotFound from '../../errors/NotFound/NotFound';
import {
  clearUser,
  clearUserPosts,
  fetchUser,
} from '../../store/actions';
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
    clearUserPosts: () => void
    fetchUser: (username: string) => void,
    user: user,
    error: {
        err : boolean,
        errMessage : string;
    },
}


const ProfileSection = ({ clearUser, clearUserPosts, fetchUser, user, error }: propTypes) => {
    const { username } = useParams<paramTypes>();
    const { total_photos } = user;
    
    const variants = {
        hidden : {
            opacity: 0,
        },
        visible : {
            opacity :1,
            transition : {ease: 'easeInOut'}
        },
        exit : {
            opacity : 0,
            transition: {ease: 'easeInOut'}
        }
    }

    useEffect(() => {
        fetchUser(username);
        return (() => {
            clearUser();
            clearUserPosts();
        })
    },[clearUserPosts,clearUser,fetchUser,username])

    const userIsEmpty = Object.keys(user).length === 0 && user.constructor === Object;

    if (error.err) {
        return <NotFound errorMessage={error.errMessage} />
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
            <motion.div 
                style={{width:"100%",alignItems:"center"}}
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <UserDetails user={user}></UserDetails>
                <UserPosts username={username} pages={Math.ceil(total_photos / 9)} />
            </motion.div>
        )
}
}

const mapStateToProps = (state: storeState) => {
    const { user, error } = state;
    return { user: user, error: error };
}

export default connect(mapStateToProps, {
    fetchUser,
    clearUser,
    clearUserPosts
})(ProfileSection);




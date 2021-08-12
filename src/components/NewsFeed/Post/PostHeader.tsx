import React from 'react';

import { useHistory } from 'react-router-dom';

import { user } from '../../../types';

type MyProps = {
    user: user;
}

const PostHeader = ({user} : MyProps) => {
    const {username, profile_image} = user;
    let history = useHistory();
    return(
       <>
            <img className="pt63HeaderIcon" src={profile_image.large} alt="profile_icon"></img>
            <div onClick = {() => {history.push("/"+ username)}} className="pt63HeaderUser bold-text"><h6>{username}</h6></div>
       </>
    )
}

export default PostHeader
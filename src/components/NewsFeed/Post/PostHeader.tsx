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
            <img className="header-icon" src={profile_image.small} alt="profile_icon"></img>
            {/* <Link to={`/${username}`}><a className="header-user bold-text" href="_blank">{username}</a></Link> */}
            <div onClick = {() => {history.push("/"+ username)}} className="header-user bold-text">{username}</div>
       </>
    )
}

export default PostHeader
import React from 'react';

import { user } from '../../types';

type MyProps = {
    user: user;
}

const PostHeader = ({user} : MyProps) => {
    const {instagram_username,profile_image} = user;
    return(
       <>
            <img className="header-icon" src={profile_image.small} alt="profile_icon"></img>
            <a className="header-user bold-text" href="_blank">{instagram_username}</a>
       </>
    )
}

export default PostHeader
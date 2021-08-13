import './post.css';

import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { timePostedAgo } from '../../utils';
import LikeSection from './LikeSection';

type MyProps = {
    likes: number,
    liked_by_user: boolean,
    username: string,
    description: string,
    created_at: string
}

const PostFooter = ({created_at,description,username,likes,liked_by_user}:MyProps) => {

    const [likesCount, setlikesCount] = useState(likes);

    const updateLikes = (liked:boolean) => {
        !liked ? setlikesCount(likesCount+1): setlikesCount(likesCount-1);
    }

    let history = useHistory();
    return (
        <div className="pt63PostFooter">
            <LikeSection liked_by_user={liked_by_user} updateLikes={updateLikes}></LikeSection>
            <div className="pt63PostDetails">
                <div className="bold-text"> {likesCount} likes</div>
                <p className="regular-text">
                    <span 
                    style={{fontSize:"1em"}} 
                    className="bold-text"
                    onClick = {() => {history.push("/"+ username)}}>{username}</span>
                    &nbsp;{description}
                </p>
                <p className="light-text">{timePostedAgo(created_at)}</p>
            </div>
        </div>
    )
}

export default PostFooter
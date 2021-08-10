import './post.css';

import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { timePostedAgo } from '../../../utils/utils';
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
        !liked ? setlikesCount(likesCount+1):
        setlikesCount(likesCount-1);
    }

    let history = useHistory();

    return (
        <div className="post-footer">
            <LikeSection liked_by_user={liked_by_user} updateLikes={updateLikes}></LikeSection>
            <div className="post-details">
                <div className="bold-text"> {likesCount} likes</div>
                <p className="regular-text">
                    <span className="bold-text" onClick = {() => {history.push("users/"+ username)}}>{username}</span>
                    &nbsp;{description}
                </p>
                <p className="light-text">{timePostedAgo(created_at)}</p>
            </div>
        </div>
    )
}

export default PostFooter
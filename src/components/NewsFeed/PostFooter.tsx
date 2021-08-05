import '../../styles/Post.css';

import React from 'react';

import { timePostedAgo } from '../../utils/utils';
import LikeSection from './LikeSection';

type MyProps = {
    likes: number,
    liked_by_user: boolean,
    username: string,
    description: string,
    created_at: string
}

const PostFooter = ({created_at,description,username,likes,liked_by_user}:MyProps) => {
    return (
        <div className="post-footer">
            <LikeSection liked={liked_by_user}></LikeSection>
            <div className="post-details">
                <div className="bold-text"> {likes} likes</div>
                <p className="regular-text">
                    <span className="bold-text">{username}</span>
                    &nbsp;{description}
                </p>
                <p className="light-text">{timePostedAgo(created_at)}</p>
            </div>
        </div>
    )
}

export default PostFooter
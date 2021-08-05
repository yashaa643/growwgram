import '../../styles/Post.css';

import React from 'react';

import LikeSection from './LikeSection';

type MyProps = {
    likes: number,
    liked_by_user: boolean
    username: string
    description: string
}

const PostFooter = ({description,username,likes,liked_by_user}:MyProps) => {
    return (
        <div className="post-footer">
            <LikeSection liked={liked_by_user}></LikeSection>
            <div className="post-details">
                <div className="bold-text"> {likes} likes</div>
                <div className="regular-text">
                    <span className="bold-text">{username}</span>
                </div>
            </div>
            
        </div>
    )
}

export default PostFooter
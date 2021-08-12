import './post.css';

import React from 'react';

import { post } from '../../../types';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

type MyProps = {
    post: post
}

const Post = ({ post }: MyProps) => {
    const { created_at, liked_by_user, likes, urls, description, alt_description, user } = post;
    return (
        <div className="pt63PostContainer">
            <div className="pt63Post">
                <div className="pt63PostHeader"> <PostHeader user={post.user} /></div>
                <img src={urls.small}
                 alt={!description ? alt_description : description} />
                <PostFooter
                    description={!description ? alt_description : description}
                    username={user.username}
                    likes={likes}
                    liked_by_user={liked_by_user}
                    created_at={created_at}
                />
            </div>
        </div>
    )

}

export default Post
import '../../styles/Post.css';

import React from 'react';

import { post } from '../../types';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

type MyProps = {
    post : post
}

const Post = ({post}:MyProps) => {
    console.log(post);
    const {liked_by_user,likes, urls, description , user} = post;
    return(
        <div className="post">
            <div className="post-header"> <PostHeader user={post.user}/></div>
            <img src={urls.small} alt={description} />
            <PostFooter 
                description={description}
                username={user.username}
                likes = {likes}
                liked_by_user = {liked_by_user}
                />
        </div>
    )
    
}

export default Post
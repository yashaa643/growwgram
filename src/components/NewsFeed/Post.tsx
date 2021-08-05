import '../../styles/Post.css';

import React from 'react';

import { post } from '../../types';
import PostHeader from './PostHeader';

type MyProps = {
    post : post
}

const Post = ({post}:MyProps) => {
    console.log(post);
    const {urls, description} = post;
    return(
        <div className="post">
            <div className="post-header"> <PostHeader user={post.user}/></div>
            <img src={urls.small} alt={description} />
        </div>
    )
    
}

export default Post
import './post.css';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';

import useWindowDimensions from '../../hooks';
import { post } from '../../types';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

type MyProps = {
    post: post
}

const Post = ({ post }: MyProps) => {
    const { created_at, liked_by_user, likes, urls, description, alt_description, user, blur_hash ,height, width} = post;
    const [imgLoad, setImgLoad] = useState(false)
    let {width:postWidth} = useWindowDimensions();
    
    postWidth = Math.min(400,postWidth);

    const imageLoaded = () => {
        setImgLoad(true);
    }
    return (
        <div className="pt63PostContainer">
            <div className="pt63Post">
                <PostHeader user={post.user} />
                <div
                style={{ display: imgLoad ? "none" : "block" }}>
                    <Blurhash
                    hash={blur_hash}
                    width={postWidth}
                    height={(height/width)*postWidth}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
                </div>
                <motion.img
                    style={{ display: !imgLoad ? "none" : "block" }}
                    className="pt63Img"
                    onLoad={imageLoaded}
                    whileTap={{ scale: 1.5 }}
                    src={urls.regular}
                    alt={description ? description : alt_description} />
                <PostFooter
                    description={description ? description : alt_description}
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
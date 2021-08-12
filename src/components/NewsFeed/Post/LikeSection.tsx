import './post.css';

import React, { useState } from 'react';

type MyProps = {
    liked_by_user: boolean
    updateLikes: (liked:boolean) => void
}

const LikeSection = ({liked_by_user,updateLikes}:MyProps) => {
    const [liked, setLiked] = useState(liked_by_user);
    return (
    <div className="pt63LikeSection">
        <button onClick= {() => {
            updateLikes(liked);
            setLiked(!liked)
        }} 
        className="pt63IconButton"
        >
            <span className={`material-icons ${liked ? "liked-color" : ""}`}>
                {liked? "favorite" : "favorite_border"}
            </span>
        </button>
        <button className="pt63IconButton">
            <span className="material-icons">mode_comment</span>
        </button>
        <button className="pt63IconButton">
            <span className="material-icons">send</span>
        </button>
        <button id="savepost-btn" className="pt63IconButton">
            <span className="material-icons">bookmark_border </span> 
        </button>
    </div>
    )
}

export default LikeSection;
import './post.css';

import React, { useState } from 'react';

type MyProps = {
    liked_by_user: boolean
    updateLikes: (liked:boolean) => void
}

const LikeSection = ({liked_by_user,updateLikes}:MyProps) => {
    const [liked, setLiked] = useState(liked_by_user);
    return (
    <div className="like-section">
        <button onClick= {() => {
            updateLikes(liked);
            setLiked(!liked)
        }} 
        className="icon-btn"
        >
            <span className={`material-icons ${liked ? "liked-color" : ""}`}>
                {liked? "favorite" : "favorite_border"}
            </span>
        </button>
        <button className="icon-btn">
            <span className="material-icons">mode_comment</span>
        </button>
        <button className="icon-btn">
            <span className="material-icons">send</span>
        </button>
        <button id="savepost-btn" className="icon-btn">
            <span className="material-icons">bookmark_border </span> 
        </button>
    </div>
    )
}

export default LikeSection;
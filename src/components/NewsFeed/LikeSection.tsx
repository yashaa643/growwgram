import '../../styles/Post.css';

import React from 'react';

type MyProps = {
    liked: boolean
}
const LikeSection = ({liked}:MyProps) => {
    return (
    <div className="like-section">
        <button className="icon-btn">
            <span className="material-icons">favorite_border</span>
        </button>
        <button className="icon-btn">
            <span className="material-icons">mode_comment</span>
        </button>
        <button className="icon-btn">
            <span className="material-icons">send</span>
        </button>
        <button id="savepost-btn" className="icon-btn">
            <span className="material-icons">bookmark_border</span>
        </button>
    </div>
    )
}

export default LikeSection;
import React from 'react';

import { post } from '../../types';

type MyProps = {
    userPosts: post[];
}

const GridView = ({userPosts}:MyProps) => {

    return (
        <div>
             <div className="up56Container">
                {userPosts.map(({ likes, id, urls, alt_description }) => {
                    return (
                        <div key={id} className="up56ImgContainer">
                            <div className="up56Hov">
                                <span className="material-icons">favorite </span>
                                <span style={{marginLeft : "5px"}} className="up56HovContent">{likes}</span>   
                                </div>
                            <img className="up56Img" src={urls.small} alt={alt_description}></img>
                        </div>
                    )  
                })}
                </div> 
        </div>
    )
}

export default GridView;



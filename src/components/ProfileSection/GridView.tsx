import React from 'react';

import { motion } from 'framer-motion';

import { post } from '../../types';

type MyProps = {
    userPosts: post[];
}

const GridView = ({ userPosts }: MyProps) => {

    return (
        <div>
            <div className="up56Container">
                {userPosts.map(({ likes, id, urls, alt_description }) => {
                    return (
                        <motion.div 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:2,boxShadow: "0px 0px 62px -12px rgba(110,98,98,0.85)"}}
                        key={id} className="up56ImgContainer">
                            <motion.div 
                            initial={{opacity:0}}
                            whileHover={{opacity:1}}
                            whileTap={{opacity:0}}
                            className="up56Hov">
                                <span className="material-icons">favorite </span>
                                <span style={{ marginLeft: "5px" }} className="up56HovContent">{likes}</span>
                            </motion.div>
                            <img className="up56Img" src={urls.regular} alt={alt_description}></img>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default GridView;



import React from 'react';

import { motion } from 'framer-motion';

import { user } from '../../types';

type MyProps = {
    searchUserList : user[];
    openUser: (username:string) => void
}

const variants = {
    hidden : {
        height: '0'
    },
    visible : {
        height: 'auto',
        transition : {ease: 'easeInOut',duration: 0.2}
    },
    exit : {
        height: 0,
        transition: {ease: 'easeInOut'}
    }
}


const Popover = ({searchUserList,openUser}:MyProps) => {
    return (
        <motion.div 
        id="sc94PopoverContent"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit">
            {searchUserList.map(({ id, username, instagram_username, profile_image, first_name, last_name }) => {
                return (
                    <div
                     onMouseDown={() => openUser(username)} 
                     className="sc94SearchUser"
                     key={id}
                     >
                        <img src={profile_image.large} alt={instagram_username}></img>
                        <div className="sc94Name">
                            <h6>{instagram_username || username}</h6>
                            <p style={{ color: "rgb(142,142,142,1)" }}>{first_name} {last_name}</p>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}

export default Popover

import './header.css';
import '../../fonts/Billabong/Billabong.ttf';

import React from 'react';

import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import SearchComponent from './SearchComponent';

export const Header = () => {
    let history = useHistory();
    return (
        <motion.div className="hr12Nav"
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{delay:0.8,duration:0.6,type:'tween'}}>
            <div onClick={() => history.push("/")} className="hr23Logo">Growwgram</div>
            <SearchComponent />
        </motion.div>
    )
}
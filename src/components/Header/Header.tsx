import './header.css';
import '../../fonts/Billabong/Billabong.ttf';

import React from 'react';

import { useHistory } from 'react-router-dom';

import SearchComponent from './SearchComponent';

export const Header = () => {
    let history = useHistory();
    return (
        <div className="hr12Nav">
            <div onClick={() => {history.push("/");localStorage.clear()}} className="hr23Logo">Growwgram</div>
            <SearchComponent />
        </div>
    )
}
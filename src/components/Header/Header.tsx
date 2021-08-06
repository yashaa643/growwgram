import './header.css';
import '../../fonts/Billabong/Billabong.ttf';

import React from 'react';

import { useHistory } from 'react-router-dom';

export const Header = () => {
    let history = useHistory();
    return (
        <div className="hr12Nav">
            <div onClick={() => history.push("/")} className="hr23Logo">Growwgram</div>
        </div>
    )
}

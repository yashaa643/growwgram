import './NotFound.css';

import React from 'react';

import notFound from '../../images/404.svg';

const NotFound = () => {
    return (
        <div className="nf13Div">
            <img className="nf13Img" src={notFound} alt="404"></img> 
            <a href="/"> Click here to return to Home Page</a>
        </div>         
    )
}

export default NotFound;

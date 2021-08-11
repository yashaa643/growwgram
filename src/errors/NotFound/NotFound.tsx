import './NotFound.css';

import React from 'react';

import unAuthorizedPng from '../../images/PNG/03.png';
import badURLPng from '../../images/PNG/05.png';
import notFoundPng from '../../images/PNG/09.png';
import networkErrorPng from '../../images/PNG/11.png';

type MyProps = {
    errorMessage: string;
}

const NotFound = ({ errorMessage }: MyProps) => {

    if (errorMessage === "Network Error ") {
        return (
            <div className="nf13Div">
                <h3><a href="/">{errorMessage} Click Here To Try Again</a></h3>
                <img className="nf13Img" src={networkErrorPng} alt="404"></img>
            </div>
        )
    } else if (errorMessage === "401") {
        return (
            <div className="nf13Div">
                <h3><a href="/">You are Unauthorized to view this page</a></h3>
                <img className="nf13Img" src={unAuthorizedPng} alt="401"></img>
            </div>
        )
    }else if (errorMessage === "BAD_URL") {
        return (
            <div className="nf13Div">
                <h3><a href="/">UH OH!! Looks Like You are Lost</a></h3>
                <img className="nf13Img" src={badURLPng} alt="401"></img>
            </div>
        )
    }else if (errorMessage === "404") {
        return (
            <div className="nf13Div">
                <h3><a href="/">Sorry We Did Not Find Anything</a></h3>
                <img className="nf13Img" src={notFoundPng} alt="401"></img>
            </div>
        )
    }
     else {
        return (
            <div className="nf13Div">
                <h3><a href="/">Click Here to go back</a></h3>
                <img className="nf13Img" src={networkErrorPng} alt="401"></img>
            </div>
        )
    }

}

export default NotFound;

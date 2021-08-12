import './NotFound.css';

import React from 'react';

import unAuthorizedPng from '../../images/03.png';
import badURLPng from '../../images/05.png';
import notFoundPng from '../../images/09.png';
import apiErrorPng from '../../images/10.png';
import networkErrorPng from '../../images/11.png';

type MyProps = {
    errorMessage: string;
}

const NotFound = ({ errorMessage }: MyProps) => {

    if (errorMessage === "Network Error ") {
        return (
            <div className="nf13Div">
                <h3><a href="/">{errorMessage} Click Here To Try Again</a></h3>
                <img className="nf13Img" src={networkErrorPng} alt="Network Error"></img>
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
                <img className="nf13Img" src={badURLPng} alt="BAD URL"></img>
            </div>
        )
    }else if (errorMessage === "404") {
        return (
            <div className="nf13Div">
                <h3><a href="/">Sorry We Did Not Find Anything</a></h3>
                <img className="nf13Img" src={notFoundPng} alt="404"></img>
            </div>
        )
    }else if (errorMessage === "403"){
        return (
            <div className="nf13Div">
                <h3><a href="/">Brrrr the Source has been exhausted please wait while we look into it</a></h3>
                <img className="nf13Img" src={apiErrorPng} alt="403"></img>
            </div>
        )
    }
     else {
        return (
            <div className="nf13Div">
                <h3><a href="/">Click Here to go back</a></h3>
                <img className="nf13Img" src={networkErrorPng} alt="Error"></img>
            </div>
        )
    }

}

export default NotFound;

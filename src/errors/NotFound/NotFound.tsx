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
                <img className="nf13Img" src={networkErrorPng} alt="Network Error"></img>
                <h4><a href="/">{errorMessage}Network Error Click Here To Try Again</a></h4>
            </div>
        )
    } else if (errorMessage === "401") {
        return (
            <div className="nf13Div">
                <img className="nf13Img" src={unAuthorizedPng} alt="401"></img>
                <h4><a href="/">You are Unauthorized to view this page</a></h4>
            </div>
        )
    }else if (errorMessage === "BAD_URL") {
        return (
            <div className="nf13Div">
                <img className="nf13Img" src={badURLPng} alt="BAD URL"></img>
                <h4><a href="/">UH OH!! Looks Like You are Lost</a></h4>
            </div>
        )
    }else if (errorMessage === "404") {
        return (
            <div className="nf13Div">
                <img className="nf13Img" src={notFoundPng} alt="404"></img>
                <h4><a href="/">Sorry We Did Not Find Anything</a></h4>
            </div>
        )
    }else if (errorMessage === "403"){
        return (
            <div className="nf13Div">
                <img className="nf13Img" src={apiErrorPng} alt="403"></img>
                <h4><a href="/">Brrrr the Source has been exhausted please wait while we look into it</a></h4>
            </div>
        )
    }
     else {
        return (
            <div className="nf13Div">
                <img className="nf13Img" src={networkErrorPng} alt="Error"></img>
                <h4><a href="/">Click Here to go back</a></h4>
            </div>
        )
    }

}

export default NotFound;

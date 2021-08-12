import './index.css';

import React from 'react';

import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
    return (
        <div className="ld23Container">
            <Loader
                type="ThreeDots"
                color="#BBBBBB"
                height={50}
                width={50}
                timeout={3000} //3 secs
            />

        </div>
    )
}

export default LoaderComponent;

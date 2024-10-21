import React from "react";
import './loader.scss';

const Loader = () => {
    return (
        <div id="loading-wrapper">
            <div className="loader-container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Loader;

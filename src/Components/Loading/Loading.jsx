import React from "react";
import "./Loading.css";
import * as constants from "../../Constants/Constants";

export const Loading = () => 
    <div className="loading">
        {constants.loadingText}
    </div>;

export default Loading;

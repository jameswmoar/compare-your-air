import React from "react";
import * as constants from "../../Constants/Constants";
import "./Error.css";

const Error = () => 
    <div className="error">
        {constants.errorText}
    </div>;

export default Error;

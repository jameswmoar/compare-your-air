import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../Constants/Constants";
import "./Matches.css";

const Matches = ({cities, handleMatchSelect}) =>
        <div className="matchField" role="matchField">
            {cities.map((city, index) => 
            <option value={city} key={index} disabled={city === constants.noSuggestions} onClick={(e => handleMatchSelect(e.target.value))} className="match" role="match">
                {city}
            </option>)}
        </div>;

Matches.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleMatchSelect: PropTypes.func.isRequired,
};

export default Matches;

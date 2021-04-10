import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";
import "./Results.css";

const Results = ({ results, closeResult }) => 
    <div className="results" role="list">
        {results.map((result, i) => {
            return <ResultCard key={i} result={result} id={i} closeResult={closeResult} />
        })}
    </div>

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        lastUpdated: PropTypes.string,
        location: PropTypes.string,
        city: PropTypes.string,
        values: PropTypes.string,
    })),
    closeResult: PropTypes.func.isRequired,
}

export default Results;

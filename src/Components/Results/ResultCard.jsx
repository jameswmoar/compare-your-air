import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import "./ResultCard.css";

const ResultCard = ({ result, closeResult, id }) => {

    if (result.loading) {
        return (
        <div className="cardOuter">
            <Loading />
        </div>)
    }

    return (
        <div className="cardOuter" role="resultCard">
            <div onClick={() => closeResult(id)} className="closeButton" role="button">
                <CloseIcon />
            </div>
            {result.error || !result.location 
            ? <div className="cardOuter">
                <Error />
            </div>
            : <div className="cardText">
                <div className="textItem lastUpdated">{result.lastUpdated}</div>
                <div className="textItem location">{result.location}</div>
                <div className="textItem">{result.city}</div>
                <div className="textItem valueData">{result.values}</div>
            </div>}
        </div>
    )
}

ResultCard.propTypes = {
    result: PropTypes.shape({
        lastUpdated: PropTypes.string,
        location: PropTypes.string,
        city: PropTypes.string,
        values: PropTypes.string,
        loading: PropTypes.bool,
        error: PropTypes.bool,
    }).isRequired,
    closeResult: PropTypes.func.isRequired,
    id: PropTypes.number,
};

export default ResultCard;

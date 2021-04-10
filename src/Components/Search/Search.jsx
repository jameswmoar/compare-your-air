import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from '@material-ui/icons/Search';
import * as api from "../../Utils/api";
import * as constants from "../../Constants/Constants";
import Matches from "./Matches";
import { sortData } from "../../Utils/dataHelper";
import "./Search.css";

const Search = ({ handleResult, setResultLoading }) => {
    const [searchField, setSearchField] = useState("");
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([])

    
    useEffect(() => {
        try {
            const fetchData = async () => {
                const { results } = await api.getLocations();
                setCities(results);
            }

            fetchData();
        } catch (error) {
            setCities([]);
        }
    }, []);

    const handleChange = (value) => {
        setSearchField(value);
        if (value) {
            const filter = cities.map(x => x.city).filter(y => y.toLowerCase().startsWith(value.toLowerCase()))
            if (filter.length === 0) {
                filter.push(constants.noSuggestions);
            }
            setFilteredCities(filter);
        } else {
            setFilteredCities([]);
        }
    }

    const handleMatchSelect = async (value) => {
        setSearchField(value);
        await getAirData(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getAirData(searchField);
    }


    const getAirData = async (city) => {
        setResultLoading();

        try {
            setFilteredCities([]);
            const data = await api.getAirQualityData(city);
            const sortedData = sortData(data.results);
            handleResult(sortedData);
            setSearchField("");
        } catch (error) {
            handleResult({ loading: false, error: true});
        }
    }

    return (<div className="section" role="search">
                <form className={filteredCities.length ? "searchBar matches" : "searchBar"} onSubmit={handleSubmit} role="searchForm">
                    <div className="searchIcon" role="img">
                        <SearchIcon />
                    </div>
                    <input placeholder={constants.searchBarPlaceholder} className="input" value={searchField} role="searchbox" onChange={(e) => handleChange(e.target.value)}/>
                </form>
                {filteredCities.length > 0 && <Matches cities={filteredCities} handleMatchSelect={handleMatchSelect} />}
            </div>);
}

Search.propTypes = {
    handleResult: PropTypes.func.isRequired,
    setResultLoading: PropTypes.func.isRequired,
};

export default Search;

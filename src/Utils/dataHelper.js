import { timeConverter } from "./dateTimeHelper";

export const sortData = (resultData) => {
    const latestResultSet = getLatestResultSet(resultData) 
    const result = {
        city: `in ${latestResultSet.city}, United Kingdom`,
        location: latestResultSet.name,
        lastUpdated: getLastUpdatedAgo(new Date(latestResultSet.lastUpdated)),
        values: calculateValues(latestResultSet.parameters)
    }

    return result;
}

const getLatestResultSet = (results) => {
    return results.reduce((a, b) => new Date(a.lastUpdated) > new Date(b.lastUpdated) ? a : b);
}

const getLastUpdatedAgo = (lastUpdated) => {
    const elapsed = Date.now() - lastUpdated;
    return `UPDATED ${timeConverter(elapsed)}`;
}

const calculateValues = (params) => {
    const paramData = params.map(x => `${x.parameter.toUpperCase()}: ${x.lastValue}`);
    return `Values: ${paramData.join(", ")}`;
}
export const getLocations = async () => {
    const url = "https://docs.openaq.org/v2/cities?limit=150&page=1&offset=0&sort=asc&country_id=gb&order_by=city";
    return await get(url);
}

export const getAirQualityData = async (city) => {
    const url = `https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=gb&city=${city}&order_by=lastUpdated&dumpRaw=false`;
    return await get(url);
}


const get = async (url) => {
    return await (await fetch(url, {mode: 'cors'})).json();
}
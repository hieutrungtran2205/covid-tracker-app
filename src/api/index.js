import axios from 'axios';
import moment from 'moment';

const COVID_API = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = COVID_API;

    if (country) {
        changeableUrl = `${COVID_API}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
};

export const getAllData = () => axios.get('https://covid19.mathdro.id/api');
export const getCountries2 = () => axios.get('https://covid19.mathdro.id/api/countries')
export const getDataByCountry = (country) => axios.get(`https://covid19.mathdro.id/api/countries/${country}`);





export const getCountries = () =>
    axios.get('https://api.covid19api.com/countries');

export const getReportByCountry = (slug) =>
    axios.get(
        `https://api.covid19api.com/dayone/country/${slug}?from=2021-01-01T00:00:00&to=${moment()
            .utc(0)
            .format()}`
    );
// export const getMapDataByCountryId = (countryId) =>
//     import(
//         `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
//     );
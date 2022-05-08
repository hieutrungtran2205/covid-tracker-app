import axios from 'axios';

export const getAllDataCountries = () => axios.get('https://disease.sh/v3/covid-19/countries');
export const getDataByCountry = (country) => axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
export const getHistorical = (country) => axios.get(`https://disease.sh/v3/covid-19/historical/${country}`);
export const getGlobalData = () => axios.get('https://disease.sh/v3/covid-19/all');

// export const getMapDataByCountryId = (countryId) =>
//     import(
//         `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
//     );
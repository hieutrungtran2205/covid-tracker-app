import axios from 'axios';

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
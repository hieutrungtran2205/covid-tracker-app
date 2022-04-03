import 'antd/dist/antd.css';
import { sortBy } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchData, getAllData, getCountries, getReportByCountry } from './api';
import './App.css';
import CountrySelector from './components/CountrySelector/CountrySelector';
import HighLight from './components/HighLight';
import Summary from './components/Summary';
import RankCase from './components/Table/RankCase';
import covidImage from './images/covid19.png';

function App() {
  const [data, setData] = useState({})
  const [tableData, setTableData] = useState([]);



  const sortData = (data) => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };
  useEffect(() => {
    getAllData.then(res => {
      setData(res.data)
    })
  }, []);
  console.log(data);
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          let sortedData = sortData(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);
  // console.log(tableData);



  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, 'Country');
      setCountries(countries);
      setSelectedCountryId('vn');
    });
  }, []);
  const handleOnChange = useCallback((e) => {
    setSelectedCountryId(e);
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        // console.log('getReportByCountry', { res });
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      const latestSecondData = report[report.length - 2];
      return [
        {
          title: 'Confirmed',
          count: latestData.Confirmed,
          type: 'confirmed',
          color: 'red',
          raise: latestData.Confirmed - latestSecondData.Confirmed,
        },
        {
          title: 'Recovered',
          count: latestData.Recovered,
          type: 'recovered',
          color: 'green',
          raise: latestData.Recovered - latestSecondData.Recovered,
        },
        {
          title: 'Deaths',
          count: latestData.Deaths,
          type: 'death',
          color: 'black',
          raise: latestData.Deaths - latestSecondData.Deaths,
        },
      ];
    }
    return [];
  }, [report]);


  // console.log('r', report);









  return (

    <div className="App">
      <img src={covidImage} alt='Covid19' style={{ padding: '8px 32px' }} />
      <CountrySelector
        handleOnChange={handleOnChange}
        countries={countries}
        value={selectedCountryId}
      />
      <div className='wrapper'>
        <div className='left'>
          <HighLight summary={summary} />
          <Summary countryId={selectedCountryId} report={report} />
        </div>
        <div className='right'>
          <RankCase tableData={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;

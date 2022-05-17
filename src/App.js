import 'antd/dist/antd.min.css';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { getAllDataCountries, getDataByCountry, getGlobalData, getHistorical } from './api';
import './App.css';
import CountrySelector from './components/CountrySelector';
import Footer from './components/Footer';
import Header from './components/Header';
import HighLightCard from './components/HighLightCard';
import LineChart from './components/LineChart';
import Map from './components/Map';
import News from './components/News';
import RankCase from './components/RankCase';
import Symptom from './components/Symptom';
import Treatment from './components/Treatment';
import Vaccine from './components/Vaccine';

function App() {
  const [data, setData] = useState([]);
  const [countryIso, setCountryIso] = useState('GLOBAL');
  const [dataByCountry, setDataByCountry] = useState([]);
  const [historical, setHistorical] = useState([]);
  const [typeCard, setTypeCard] = useState('cases');
  const [timeUpdate, setTimeUpdate] = useState(null);

  useEffect(() => {
    getAllDataCountries().then(({ data }) => {
      setData(data)
    })
  }, []);

  const handleOnChange = useCallback((e) => {
    setCountryIso(e);
  }, []);

  useEffect(() => {
    if (countryIso) {
      const selectedCountry = data.find(country =>
        country.countryInfo.iso3 === countryIso
      )
      if (countryIso === 'GLOBAL') {
        getGlobalData().then(({ data }) => {
          setDataByCountry(data)
          setTimeUpdate(dayjs(data?.updated).format('hh:mm DD-MM-YY'))
        })
        getHistorical('all').then(({ data }) => setHistorical([data]))
      } else {
        getDataByCountry(selectedCountry?.countryInfo.iso3).then(({ data }) => setDataByCountry(data))
        getHistorical(selectedCountry?.countryInfo.iso3).then(({ data }) => setHistorical([data?.timeline]))
      }
    }
  }, [data, countryIso]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <CountrySelector
              handleOnChange={handleOnChange}
              countries={data}
              value={countryIso}
              timeUpdate={timeUpdate}
            />
            <div className='wrapper'>
              <div className='left'>
                <HighLightCard summary={dataByCountry} setTypeCard={setTypeCard} />
                <LineChart data={historical} typeCard={typeCard} />
              </div>
              <div className='right'>
                <RankCase tableData={data} />
              </div>
            </div>
          </>
        } />

        <Route path='map' element={
          <>
            <Map countries={data} casesType="cases" />
          </>
        } />
        <Route path='symptom' element={<Symptom />} />
        <Route path='treatment' element={<Treatment />} />
        <Route path='vaccine' element={<Vaccine />} />
        <Route path='news' element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { PhoneOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllDataCountries, getDataByCountry, getGlobalData, getHistorical } from './api';
import './App.css';
import CountrySelector from './components/CountrySelector';
import HighLightCard from './components/HighLightCard';
import LineChart from './components/LineChart';
import News from './components/News';
import RankCase from './components/RankCase';
import covid4 from "./images/covid4.jpg";
import Map from './components/Map';

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
      <Layout.Header style={{ width: '100%' }} >
        <Link to='/'>
          <h1 style={{ color: '#fff', float: 'left' }}>Covid Tracker</h1>
        </Link>
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }} defaultSelectedKeys="1">
          <Menu.Item key="1">
            <Link to='/'>
              Số liệu
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='map'>
              Bản đồ
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='news'>
              Tin tức
            </Link>
          </Menu.Item>
        </Menu>
        <h4 style={{ color: '#fff', float: 'right', padding: '0 16px' }}><PhoneOutlined style={{ padding: '0 8px' }} />Đường dây nóng: 19009095</h4>
      </Layout.Header>

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
                <RankCase tableData={data} img={covid4} />
              </div>
            </div>
          </>
        } />

        <Route path='map' element={
          <>
            <Map countries={data} casesType="cases" />
          </>
        } />
        <Route path='news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;

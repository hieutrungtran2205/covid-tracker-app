import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { fetchData } from './api';
import './App.css';
import CardList from './components/Card/CardList';
import RankCase from './components/Table/RankCase';
import Table1 from './components/Table/Table1';
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
    const getData = async () => {
      const data = await fetchData()
      setData(data)
    }
    getData()
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
  console.log(tableData);
  return (

    <div className="App">
      <img src={covidImage} alt='Covid19' style={{ padding: '8px 32px' }} />
      <div className='wrapper'>
        {/* <CardList data={data} /> */}
        {/* <Table1 countries={tableData} /> */}
        <RankCase tableData={tableData} />
      </div>
    </div>
  );
}

export default App;

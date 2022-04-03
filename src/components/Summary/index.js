import React, { useEffect, useState } from 'react';
import LineChart from '../Charts/LineChart';
import HighMaps from '../Charts/HighMaps';
import { getMapDataByCountryId } from '../../api';

export default function Summary({ countryId, report }) {
  const [mapData, setMapData] = useState({});
  // useEffect(() => {
  //   if (countryId) {
  //     getMapDataByCountryId(countryId)
  //       .then((res) => {
  //         setMapData(res);
  //       })
  //       .catch((err) => console.log({ err }));
  //   }
  // }, [countryId]);

  return (
    <div style={{ height: '400px', marginTop: 10 }}>
      <LineChart data={report} />

      {/* <HighMaps mapData={mapData} /> */}


    </div>
  );
}

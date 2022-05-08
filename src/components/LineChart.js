import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';

export default function LineChart({ data, typeCard }) {
  const [reportType, setReportType] = useState('all');
  let categories = [];
  let dataSeries = [];
  let categoriesCustom = [];
  let dataSeriesCustom = [];
  let title = '';
  let lineColor = [];

  switch (typeCard) {
    case 'cases':
      categories = data?.map((item) => Object.keys(item.cases));
      dataSeries = data?.map((item) => Object.values(item.cases));
      categoriesCustom = categories[0];
      dataSeriesCustom = dataSeries[0];
      title = 'Số ca nhiễm';
      lineColor = ['red'];
      break;
    case 'recovered':
      categories = data?.map((item) => Object.keys(item.recovered));
      dataSeries = data?.map((item) => Object.values(item.recovered));
      categoriesCustom = categories[0];
      dataSeriesCustom = dataSeries[0];
      title = 'Số ca khỏi';
      lineColor = ['green']
      break;
    case 'deaths':
      categories = data?.map((item) => Object.keys(item.deaths));
      dataSeries = data?.map((item) => Object.values(item.deaths));
      categoriesCustom = categories[0];
      dataSeriesCustom = dataSeries[0];
      title = 'Số ca tử vong';
      lineColor = ['black']
      break;
    default:
      return [];
  }

  const options = {
    chart: {
      height: 400,
    },
    title: {
      text: title,
    },
    xAxis: {
      categories: categoriesCustom,
      crosshair: true,
    },
    colors: lineColor,
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: title,
        data: dataSeriesCustom,
      },
    ],
  };
  console.log('option', options);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

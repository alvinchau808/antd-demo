import React, { useState, useEffect } from 'react';
import { GroupedColumn } from '@ant-design/charts';

const CovidPage = (props) => {
  const country = props.country;
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, [country]);
  const asyncFetch = () => {
    fetch(`https://covid19.mathdro.id/api/countries/${ country }/confirmed`)
      .then(response => response.json())
      .then(json => {
        let data = [];
        for (let state of json){
          data.push({
            'provinceState': state.provinceState,
            'type': 'confirmed',
            'cases': state.confirmed,
          });
          data.push({
            'provinceState': state.provinceState,
            'type': 'active',
            'cases': state.active,
          });
          data.push({
            'provinceState': state.provinceState,
            'type': 'deaths',
            'cases': state.deaths,
          });
        };
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: `COVID-19 ${ country }`,
    },
    forceFit: true,
    data,
    xField: 'provinceState',
    yField: 'cases',
    groupField: 'type',
    yAxis: {
      min: 0,
    },
    label: {
      visible: true,
    },
    color: ['orange', 'red', 'black'],
  };
  return <GroupedColumn {...config} />;
};

export default CovidPage;
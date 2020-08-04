import React, { useState, useEffect } from 'react';
import { GroupedColumn } from '@ant-design/charts';

const CovidPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      asyncFetch();
    }, []);
    const asyncFetch = () => {
      fetch('https://covid19.mathdro.id/api/countries/australia/confirmed')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {
          console.log('fetch data failed', error);
        });
    };

    const config = {
      title: {
        visible: true,
        text: 'COVID-19 Australia',
      },
      forceFit: true,
      data,
      xField: 'provinceState',
      yField: 'confirmed',
      
      yAxis: {
        min: 0,
      },
      label: {
        visible: true,
      },
      groupField: 'confirmed',
      color: ['#1ca9e6', '#f88c24'],
    };
    return <GroupedColumn {...config} />;
  };

export default CovidPage;
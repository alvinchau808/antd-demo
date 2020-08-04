import React from 'react';
import { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24KjfUOgRYa/GDP.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: '2000 ~ 2018 年各国家 GDP 趋势对比',
    },
    description: {
      visible: true,
      text:
        '图形标签 (label) 位于折线尾部\uFF0C用于标注整根折线\uFF0C并有带有排名的含义在其中\u3002',
    },
    padding: [20, 100, 30, 80],
    forceFit: true,
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    xAxis: {
      type: 'dateTime',
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yAxis: { formatter: (v) => `${(v / 1000000000).toFixed(1)} B` },
    legend: { visible: false },
    label: {
      visible: true,
      type: 'line',
    },
    animation: { appear: { animation: 'clipingWithData' } },
    smooth: true,
  };

  return <Line {...config} />;
};
export default Page;
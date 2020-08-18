import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';
import CovidPage from './CovidPage.js';

class App extends React.Component {
  state = {
    country: 'china',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ country: e.key });
  };

  render() {
    const { country } = this.state;
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={ country } mode="horizontal">
          <Menu.Item key="australia" icon={<BarChartOutlined />}>
            Australia
          </Menu.Item>
          <Menu.Item key="china" icon={<BarChartOutlined />}>
            China
          </Menu.Item>
        </Menu>
        <CovidPage country={ country }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
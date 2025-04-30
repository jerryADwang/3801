import { useState } from 'react'
import Template from '../components/Template'
import { Typography } from 'antd';
const { Title } = Typography;
import { Layout, theme, Select, DatePicker, Button, Row, Col, Divider, Table, Tag, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
import React from 'react';
import RequestMessage from '../components/RequestMessage';
import ChartRadar from '../components/Radar';
function Settings() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const handleRowClick = (record) => {
  //   console.log('Clicked row:', record);
  //   navigate(`/employee/${record.key}`);
  // };

  return (
    <Template>
      <Content style={{
        margin: '24px 16px 0',
        overflow: 'initial',
        minHeight: 'calc(100vh - 112px)'
      }}>
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: '100%'
          }}
        >

          <Divider />


        </div>
      </Content>
    </Template>
  )
}

export default Settings

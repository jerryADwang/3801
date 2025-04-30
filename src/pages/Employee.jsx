import { useState } from 'react'
import Template from '../components/Template'
import { Typography } from 'antd';
const { Title } = Typography;
import { Layout, theme, Select, DatePicker, Button, Row, Col, Divider, Table, Tag, Space, InputNumber, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
import React from 'react';
import RequestMessage from '../components/RequestMessage';
import Search from '../components/Search';
import LineChart from '../components/Line';
const employeeData = [
  {
    label: <span>manager</span>,
    title: 'manager',
    options: [
      { label: <span>Jack</span>, value: '1' },
      { label: <span>Lucy</span>, value: '2' },
      { label: <span>Black</span>, value: '3' },

    ],
  },
  {
    label: <span>sale</span>,
    title: 'sale',
    options: [
      { label: <span>Jerry</span>, value: '4' },
      { label: <span>Tom</span>, value: '5' },
      { label: <span>John</span>, value: '6' },

    ],
  },
  {
    label: <span>finance</span>,
    title: 'finance',
    options: [
      { label: <span>Cathy</span>, value: '7' },
      { label: <span>Jane</span>, value: '8' },
      { label: <span>Jim</span>, value: '9' },

    ],
  },
];

function Employee() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
          <Row gutter={16} align="middle">
            <Col span={14}>
              <Row gutter={16}>
                <Col span={8}>
                  <div style={{ textAlign: 'left' }}>
                    <Title level={5}>Staff Id</Title>
                    <Input style={{ width: '80%' }} />
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'left' }}>
                    <Title level={5}>Staff Name</Title>
                    <Search employeeData={employeeData} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={10} style={{ textAlign: 'right' }}>
              <RequestMessage icon={<SearchOutlined />} type="primary" style={{ marginRight: 8 }}>Search</RequestMessage>
              <Button>Reset</Button>
            </Col>
          </Row>
          <Divider />
        </div>
      </Content>
    </Template>
  )
}

export default Employee

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

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Mental Health Data',
    dataIndex: 'mentalHealthData',
    key: 'mentalHealthData',
  },
  {
    title: 'Recent 30-Day Tendency',
    dataIndex: 'recent30DayTendency',
    key: 'recent30DayTendency',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    index: '1',
    name: 'John Brown',
    age: 32,
    department: 'Sale',
    mentalHealthData: 'Good',
    recent30DayTendency: 'Stable',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    index: '2',
    name: 'Jim Green',
    age: 42,
    department: 'Human Resource',
    mentalHealthData: 'Moderate',
    recent30DayTendency: 'Improving',
    tags: ['loser'],
  },
  {
    key: '3',
    index: '3',
    name: 'Joe Black',
    age: 32,
    department: 'Finance',
    mentalHealthData: 'Poor',
    recent30DayTendency: 'Declining',
    tags: ['cool', 'teacher'],
  },
];

function Index() {
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
          <Row gutter={16} align="middle">
            <Col span={14}>
              <Row gutter={16}>
                <Col span={8}>
                  <div style={{ textAlign: 'left' }}>
                    <Title level={5}>Department</Title>
                    <Select
                      defaultValue="Human Resource"
                      style={{ width: '100%' }}
                      options={[
                        { value: 'sale', label: 'Sale' },
                        { value: 'hr', label: 'Human Resource' },
                        { value: 'finance', label: 'Finance' },
                      ]}
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'left' }}>
                    <Title level={5}>Positions</Title>
                    <Select
                      defaultValue="Manager"
                      style={{ width: '100%' }}
                      options={[
                        { value: 'manage', label: 'Manager' },
                        { value: 'staff', label: 'Staff' },
                        { value: 'team leader', label: 'Team Leader' },
                      ]}
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'left' }}>
                    <Title level={5}>Entry Date</Title>
                    <DatePicker style={{ width: '100%' }} />
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
          <Table
            columns={columns}
            dataSource={data}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
              style: { cursor: 'pointer' }
            })}
          />
        </div>
      </Content>
    </Template>
  )
}

export default Index

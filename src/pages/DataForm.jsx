import { useState } from 'react'
import Template from '../components/Template'
import { Typography } from 'antd';
const { Title } = Typography;
import { Layout, Menu, theme, Select, DatePicker, Button, Row, Col, Divider,Table, Tag, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import React from 'react';


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

];

function Index() {
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
              <Button icon={<SearchOutlined />} type="primary" style={{ marginRight: 8 }}>Search</Button>
              <Button>Reset</Button>
            </Col>
          </Row>
          <Divider />
        <Table columns={columns} dataSource={data} />

        </div>
        
      </Content>
    </Template>
  )
}

export default Index

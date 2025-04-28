import React from 'react';
import { Input } from 'antd';
import profile from '../assets/profile.jpeg'
import {
  BarChartOutlined,
  TeamOutlined,
  SolutionOutlined,
  SettingOutlined,
  EyeOutlined,
  SearchOutlined,
  DownOutlined
} from '@ant-design/icons';
import { NotificationIcon } from 'tdesign-icons-react';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const menuItems = [
  { key: '1', icon: SolutionOutlined, label: 'Prevention Solutions' },
  { key: '2', icon: BarChartOutlined, label: 'Predictive Analytics' },
  { key: '3', icon: TeamOutlined, label: 'Employee' },
  { key: '4', icon: EyeOutlined, label: 'Employee Insights' },
  { key: '5', icon: SettingOutlined, label: 'Settings & Privacy' },
].map(item => ({
  key: item.key,
  icon: React.createElement(item.icon),
  label: item.label,
}));


function Template({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={siderStyle}>
        <Menu theme="dark" mode="inline" style={{fontSize: '12px',marginTop:'5px'}} defaultSelectedKeys={['1']} items={menuItems} />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: '0 24px', 
          background: colorBgContainer, 
          display: 'flex', 
          alignItems: 'center',
          gap: '16px',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}>
          <div style={{ width: '30%' }}>
            <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            marginLeft: 'auto'
          }}>
            <NotificationIcon />
            <img src={profile} width={30} height={30} style={{ borderRadius: '50%' }} />
            <p>Luke</p>
            <DownOutlined />
          </div>
        </Header>
          {children}
        <Footer style={{ textAlign: 'center' }}>
          Deco3801 ©{new Date().getFullYear()} Created by Team xxx
        </Footer>
      </Layout>
    </Layout>
  )
}

//

export default Template;

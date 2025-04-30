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
  DownOutlined,
  SmileOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import { NotificationIcon } from 'tdesign-icons-react';
import { Layout, Menu, theme, Badge, Dropdown, Avatar } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
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

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        Profile
      </a>
    ),
    icon: <UserOutlined />,
    onClick: () => navigate('/profile')
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Logout
      </a>
    ),
    icon: <LogoutOutlined />,
  },
];

function Template({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuConfig = [
    { key: '1', icon: EyeOutlined, label: 'Employee Insights', path: '/' },
    { key: '2', icon: TeamOutlined, label: 'Employee', path: '/employee' },
    { key: '3', icon: BarChartOutlined, label: 'Analytics', path: '/analytics' },
    { key: '4', icon: SolutionOutlined, label: 'Solutions', path: '/solutions' },
    { key: '5', icon: SettingOutlined, label: 'Settings & Privacy', path: '/settings' },
  ];

  const menuItems = menuConfig.map(item => ({
    key: item.key,
    icon: React.createElement(item.icon),
    label: item.label,
    onClick: () => navigate(item.path)
  }));

  const getSelectedKey = () => {
    const currentPath = location.pathname;
    const currentItem = menuConfig.find(item => item.path === currentPath);
    return currentItem ? [currentItem.key] : ['1'];
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={siderStyle}>
        <h1 style={{ textAlign: 'center', color: 'white', padding: '24px' }}>Logo & Name</h1>
        <Menu
          theme="dark"
          mode="inline"
          style={{ fontSize: '12px', marginTop: '0px', fontWeight: 'bold' }}
          selectedKeys={getSelectedKey()}
          items={menuItems}
        />
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
            marginLeft: 'auto',
            fontWeight: 'bold'
          }}>
            <Badge dot>
              <NotificationIcon />
            </Badge>
            <Badge dot offset={[-4, 45]} color="#5675F6">
              <Avatar src={<img src={profile} alt="avatar" />} />
            </Badge>

            <Dropdown menu={{ items }} trigger={['click']}>
              <a
                onClick={e => e.preventDefault()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#000',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  ':hover': {
                    color: 'white'
                  }
                }}
              >
                <span>Luke</span>
                <DownOutlined style={{ fontSize: '12px' }} />
              </a>
            </Dropdown>
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

export default Template;

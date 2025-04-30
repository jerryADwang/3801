import { useState } from 'react'
import Template from '../components/Template'
import { Layout, Menu, theme, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Analysis from '../components/Analysic';
import SlotStatistic from '../components/SlotStatistic';
import React from 'react';

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
            minHeight: '100%',
            textAlign: 'center'
          }}
        >

          <Analysis />
          <Divider />
          <p>long chart content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
          <Divider />
          <SlotStatistic />
        </div>
      </Content>
    </Template>
  )
}

export default Index

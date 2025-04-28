import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
const Analysis = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Employee" value={2871} />
    </Col>
    <Col span={12}>
      <Statistic title="Total Employee " value={112893}  />
    </Col>
    
  </Row>
);
export default Analysis;
import React from 'react';
import {
  Button,
  ConfigProvider,
  DatePicker,
  Input,
  Progress,
  Slider,
  Space,
  Spin,
} from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1da57a',
          colorBorder: '#09f',
          colorText: '#0f9',
        },
      }}
    >
      <div className="App">
        <header className="App-header">
          <Space direction="vertical">
            <Button
              type="primary"
              className="button"
              style={{ color: 'yellow' }}
            >
              Button
            </Button>
            <Input placeholder="Type here..."></Input>
            <Progress percent={50} type="circle" />
            <Spin spinning />
            <DatePicker
              onChange={(el) => {
                console.log(el);
              }}
            />
            <Slider />
          </Space>
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;

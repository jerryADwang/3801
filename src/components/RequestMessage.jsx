import React from 'react';
import { Button, message } from 'antd';
const RequestMessage = ({ children, icon, type, style }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Loaded!',
                duration: 2,
            });
        }, 1000);
    };
    return (
        <>
            {contextHolder}
            <Button type={type} onClick={openMessage} style={style} icon={icon}>
                {children}
            </Button>
        </>
    );
};
export default RequestMessage;
import {notification, message} from 'antd';
import 'antd/dist/antd.css';

export const openNotificationWithIcon = (props) => {
    notification[props.type]({
        message: props.message,
        duration: 2
    });
};

export const loading = () => {
    message.loading('Action in progress..')
        .then(() => openNotificationWithIcon('success'));
};
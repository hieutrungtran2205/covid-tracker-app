import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PhoneOutlined } from '@ant-design/icons';

function Header() {
    return (
        <div>
            <Layout.Header style={{ width: '100%' }} >
                <Link to='/'>
                    <h1 style={{ color: '#fff', float: 'left' }}>Covid Tracker</h1>
                </Link>
                <Menu theme="dark" mode="horizontal" style={{ float: 'right' }} defaultSelectedKeys="1">
                    <Menu.Item key="1">
                        <Link to='/'>
                            Số liệu
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='map'>
                            Bản đồ
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='news'>
                            Tin tức
                        </Link>
                    </Menu.Item>
                </Menu>
                <h4 style={{ color: '#fff', float: 'right', padding: '0 16px' }}><PhoneOutlined style={{ padding: '0 4px' }} />Đường dây nóng: 19009095</h4>
            </Layout.Header>
        </div>
    );
}

export default Header;
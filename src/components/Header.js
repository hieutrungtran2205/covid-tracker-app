import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PhoneOutlined } from '@ant-design/icons';
import '../App.css';

function Header() {
    return (
        <div>
            <Layout.Header className='navbar' style={{ width: '100%', justifyContent: 'space-between', display: 'flex' }} >
                <Link to='/'>
                    <h1 className='logo' style={{ color: '#fff', float: 'left', marginRight: '16px' }}>Covid Tracker</h1>
                </Link>
                <Menu className='menu' theme="dark" mode="horizontal" defaultSelectedKeys="1" style={{ width: 680 }}>
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
                        <Link to='symptom'>
                            Triệu chứng
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='treatment'>
                            Điều trị tại nhà
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='vaccine'>
                            Vaccine - Tiêm chủng
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='news'>
                            Tin tức
                        </Link>
                    </Menu.Item>
                </Menu>
                <h4 className='hotline' style={{ color: '#fff', padding: '0 16px' }}><PhoneOutlined style={{ padding: '0 4px' }} />Đường dây nóng: 19009095</h4>
            </Layout.Header>
        </div >
    );
}

export default Header;
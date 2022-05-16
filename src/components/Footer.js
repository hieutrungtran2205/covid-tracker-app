import React from 'react';
import { PhoneOutlined } from '@ant-design/icons';
import '../App.css';

function Footer() {
    return (
        <div className="footer">
            <div >
                <h3><PhoneOutlined style={{ padding: '0 4px' }} />Danh sách số điện thoại các bệnh viện</h3>
                <div className="list-phone">
                    <div className="col col1">
                        <p>Bệnh viện Bạch Mai - 09669 85 1616</p>
                        <p>Bệnh viện Bệnh Nhiệt đới Trung ương - 0969 24 1616</p>
                        <p>Bệnh viện E - 0912 16 8887</p>
                        <p>Bệnh viện Nhi Trung ương - 0372 88 4712</p>
                    </div>
                    <div className="col col2">
                        <p>Bệnh viện Phổi Trung ương - 0967 94 1616</p>
                        <p>Bệnh viện Đa khoa Trung ương Thái Nguyên - 0913 39 4495</p>
                        <p>Bệnh viện Đa khoa Trung ương Huế - 0945 31 3999</p>
                        <p>Bệnh viện Trung ương Cần Thơ - 0907 73 6736</p>
                    </div>
                    <div className="col col3">
                        <p>Bệnh viện Xanh Pôn Hà Nội - 0982 41 4127</p>
                        <p>Bệnh viện Vinmec Hà Nội - 0934 47 2768</p>
                        <p>Bệnh viện Đà Nẵng - 9093 58 3881</p>
                        <p>Bệnh viện Bệnh Nhiệt đới TP. Hồ Chí Minh - 0967 34 1010</p>
                    </div>
                    <div className="col col4">
                        <p>Bệnh viện Nhi đồng 1 - 0913 11 7965</p>
                        <p>Bệnh viện Nhi đồng 2 - 0798 42 9841</p>
                        <p>Bệnh viện Đa khoa tỉnh Khánh Hòa - 0965 37 1515</p>
                        <p>Bệnh viện Chợ Rẫy - 0977 010 200</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Make by <span style={{ fontWeight: 500 }}>HieuTrungTran</span>
            </div>
        </div>
    );
}

export default Footer;
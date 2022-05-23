import { List } from 'antd';
import '../App.css';

function News() {
    const news = [
        {
            id: 1,
            title: 'Thi tốt nghiệp THPT năm 2022: Bộ Y tế đề xuất F0 đang cách ly tại nhà được dự thi',
            href: 'https://covid19.gov.vn/thi-tot-nghiep-thpt-nam-2022-bo-y-te-de-xuat-f0-dang-cach-ly-tai-nha-duoc-du-thi-171220505092136588.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/260/354844073405468672/2022/5/5/avatar1651717259735-16517172603481139882161-0-33-315-537-crop-16517172780941933416783.jpg',
            description: 'Theo Bộ Y tế, thí sinh là F0 đang cách ly tại nhà có nguyện vọng thi tốt nghiệp THPT năm 2022, phải có đơn xin dự thi và ký xác nhận đồng ý...'
        },
        {
            id: 2,
            title: 'Trẻ mầm non là F0, toàn bộ học sinh trong lớp có cần phải cách ly?',
            href: 'https://covid19.gov.vn/tre-mam-non-la-f0-toan-bo-hoc-sinh-trong-lop-co-can-phai-cach-ly-171220414102709185.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/260/354844073405468672/2022/4/14/avatar1649906724996-164990672557876631423-0-0-315-504-crop-1649906740075107607424.png',
            description: 'Nếu trong lớp mầm non có một ca xét nghiệm kháng nguyên nhanh dương tính với virus SARS CoV-2 (F0) thì các...'
        },
        {
            id: 3,
            title: 'Bộ Y tế xin ý kiến 2 tình huống ứng phó với dịch COVID-19',
            href: 'https://covid19.gov.vn/bo-y-te-xin-y-kien-2-tinh-huong-ung-pho-voi-dich-covid-19-171220503134820977.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/260/354844073405468672/2022/5/3/avatar1651554842137-16515548459851551272015-0-0-315-504-crop-1651554883114592839366.jpeg',
            description: 'Bộ Y tế cho biết đang tiếp tục tổng hợp ý kiến của các Thành viên Ban Chỉ đạo Quốc gia và các cơ quan quan liên quan để hoàn thiện xây...'
        },
        {
            id: 4,
            title: 'Nóng: Việt Nam tạm dừng khai báo y tế COVID-19 với người nhập cảnh từ 0h ngày 27/4',
            href: 'https://covid19.gov.vn/nong-viet-nam-tam-dung-khai-bao-y-te-covid-19-voi-nguoi-nhap-canh-tu-0h-ngay-27-4-171220427122537595.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/260/354844073405468672/2022/4/27/avatar1651037154964-165103715622045579854-0-58-315-562-crop-16510371711441848488243.jpeg',
            description: 'Trong văn bản hoả tốc gửi Uỷ ban nhân...'
        },
        {
            id: 5,
            title: 'Hà Nội tiếp tục tiêm vaccine COVID-19 cho học sinh tiểu học',
            href: 'https://covid19.gov.vn/ha-noi-tiep-tuc-tiem-vaccine-covid-19-cho-hoc-sinh-tieu-hoc-171220427094204949.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/260/354844073405468672/2022/4/27/avatar1651027287704-16510272885141617451631.jpeg',
            description: 'Đối tượng tiêm bổ sung vaccine uốn ván- bạch hầu giảm liểu (Td) là tất cả học...'
        },
        {
            id: 6,
            title: 'Nhiều trẻ được chẩn đoán hội chứng MIS-C...',
            href: 'https://covid19.gov.vn/nhieu-tre-duoc-chan-doan-hoi-chung-mis-c-sau-nhiem-covid-19-171220420151540153.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/260/354844073405468672/2022/4/20/avatar1650442528283-1650442528463374082893.jpg',
            description: 'Theo Sở Y tế TP Hồ Chí Minh, trong...'
        }
    ]
    return (
        <div className='news' style={{ margin: '32px', display: 'flex' }}>
            <List
                className='listNews'
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                style={{ width: '60%' }}
                dataSource={news}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.images}
                            />
                        }
                    >
                        <List.Item.Meta
                            title={<a href='#' onClick={() => window.open(item.href)}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            <div className='video' style={{ width: '40%', marginTop: ' 16px', marginLeft: ' 16px' }}>
                <iframe style={{ width: '100%' }} height="480" src="https://www.youtube.com/embed/5Ey0Qo69GsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2>Hướng dẫn F0 điều trị tại nhà</h2>
            </div>
        </div>
    );
}

export default News;
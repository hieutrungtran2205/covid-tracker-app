import { List } from 'antd';

function News() {
    const news = [
        {
            id: 1,
            title: 'Bộ Y tế: Không tổ chức buổi tiêm vaccine uốn ván- bạch hầu cùng đợt với tiêm vaccine phòng COVID-19',
            href: 'https://covid19.gov.vn/bo-y-te-khong-to-chuc-buoi-tiem-vaccine-uon-van-bach-hau-cung-dot-voi-tiem-vaccine-phong-covid-19-17122050119450254.htm',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/230/354844073405468672/2022/5/1/avatar1651408985247-1651408985687874197628.jpeg',
            description: 'Đối tượng tiêm bổ sung vaccine uốn ván- bạch hầu giảm liểu (Td) là tất cả học...'
        },
        {
            id: 2,
            title: 'Bộ Y tế: Không tổ chức buổi tiêm vaccine uốn ván- bạch hầu cùng đợt với tiêm vaccine phòng COVID-19',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/230/354844073405468672/2022/5/1/avatar1651408985247-1651408985687874197628.jpeg',
            description: 'Đối tượng tiêm bổ sung vaccine uốn ván- bạch hầu giảm liểu (Td) là tất cả học...'
        },
        {
            id: 3,
            title: 'Bộ Y tế: Không tổ chức buổi tiêm vaccine uốn ván- bạch hầu cùng đợt với tiêm vaccine phòng COVID-19',
            images: 'https://covid19.qltns.mediacdn.vn/thumb_w/230/354844073405468672/2022/5/1/avatar1651408985247-1651408985687874197628.jpeg',
            description: 'Đối tượng tiêm bổ sung vaccine uốn ván- bạch hầu giảm liểu (Td) là tất cả học...'
        }
    ]
    return (
        <div style={{ margin: '32px', display: 'flex' }}>
            <List
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
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            <div style={{ width: '40%', marginTop: ' 16px', marginLeft: ' 16px' }}>
                <iframe style={{ width: '100%' }} height="480" src="https://www.youtube.com/embed/5Ey0Qo69GsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2>Hướng dẫn F0 điều trị tại nhà</h2>
            </div>
        </div>
    );
}

export default News;
import { Image, Table } from 'antd';

function RankCase({ tableData, img }) {

    const sortData = (data) => {
        let sortedData = [...data];
        sortedData.sort((a, b) => {
            if (a.cases > b.cases) {
                return -1;
            } else {
                return 1;
            }
        });
        return sortedData;
    };
    const dataSorted = sortData(tableData);

    const columns = [
        {
            title: 'Quốc gia',
            dataIndex: 'country',
        },
        {
            title: 'Nhiễm',
            dataIndex: 'cases',
            sorter: (a, b) => a.cases - b.cases,
        },
        {
            title: 'Khỏi',
            dataIndex: 'recovered',
            sorter: (a, b) => a.recovered - b.recovered,
        },
        {
            title: 'Tử vong',
            dataIndex: 'deaths',
            sorter: (a, b) => a.deaths - b.deaths,
        },
    ];
    return (
        <div className='rank'>
            <Table dataSource={dataSorted} columns={columns} scroll={{ y: 340 }} pagination={false} style={{ marginBottom: '16px' }} />
            <Image src={img} preview={false} />
        </div>
    );
}

export default RankCase;
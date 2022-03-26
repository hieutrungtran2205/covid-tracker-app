import React from 'react';
import { Table } from 'antd';

function RankCase({ tableData }) {
    const columns = [
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'Cases',
            dataIndex: 'cases',
        },
    ];
    return (
        <div>
            <Table dataSource={tableData} columns={columns} scroll={{ x: -100, y: 300 }} pagination={false} />
        </div>
    );
}

export default RankCase;
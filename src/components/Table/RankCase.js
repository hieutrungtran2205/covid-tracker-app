import React from 'react';
import { Table } from 'antd';
import './RankCase.css'

function RankCase({ tableData }) {
    const columns = [
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'Cases',
            dataIndex: 'cases',
            sorter: (a, b) => a.cases - b.cases,
        },
    ];
    return (
        <div className='rank'>
            <Table dataSource={tableData} columns={columns} scroll={{ y: 500 }} pagination={false} />
        </div>
    );
}

export default RankCase;
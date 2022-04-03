import React from 'react';
import { Col, Row } from 'antd';
import HighLightCard from './HighLightCard';
import './HighLight.css'

function HighLight({ summary }) {
    return (
        <div className='hightLight'>
            <Row gutter={16}>
                {summary.map((data, index) => (
                    <Col span={8} key={index}>
                        <HighLightCard
                            title={data.title}
                            count={data.count}
                            type={data.type}
                            color={data.color}
                            raise={data.raise}
                        />

                    </Col>
                ))}


            </Row>
        </div>
    );
}

export default HighLight;
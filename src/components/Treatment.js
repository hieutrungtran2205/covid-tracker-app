import { Image } from 'antd';
import React from 'react';
import treatmentImg from '../images/treatment.jpg'

function Treatment() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image style={{ display: 'block' }} src={treatmentImg} preview={false} width={1000} />
        </div>
    );
}

export default Treatment;
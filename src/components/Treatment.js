import { Image } from 'antd';
import React from 'react';
import treatmentImg from '../images/treatment.jpg'

function Treatment() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image style={{ display: 'block', width: '80vw' }} src={treatmentImg} preview={false} />
        </div>
    );
}

export default Treatment;
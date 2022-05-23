import { Image } from 'antd';
import React from 'react';
import treatmentImg from '../images/treatment.jpg'
import '../App.css';

function Treatment() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image className='img' style={{ display: 'block', width: '80vw' }} src={treatmentImg} preview={false} />
        </div>
    );
}

export default Treatment;
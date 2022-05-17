import { Image } from 'antd';
import React from 'react';
import symptomImg from '../images/symptom.jpg'

function Symptom() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image style={{ display: 'block' }} src={symptomImg} preview={false} width={1000} />
        </div>
    );
}

export default Symptom;
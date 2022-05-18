import { Image } from 'antd';
import React from 'react';
import symptomImg from '../images/symptom.jpg'

function Symptom() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image style={{ display: 'block', width: '80vw' }} src={symptomImg} preview={false} />
        </div>
    );
}

export default Symptom;
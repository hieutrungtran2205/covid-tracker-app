import { Image } from 'antd';
import React from 'react';
import symptomImg from '../images/symptom.jpg';
import '../App.css';

function Symptom() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image className='img' style={{ display: 'block', width: '80vw' }} src={symptomImg} preview={false} />
        </div>
    );
}

export default Symptom;
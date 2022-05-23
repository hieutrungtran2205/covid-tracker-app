import { Image } from 'antd';
import React from 'react';
import vaccineImg1 from '../images/vaccine1.jpeg';
import vaccineImg2 from '../images/vaccine2.jpg';
import vaccineImg3 from '../images/vaccine3.jpg';
import '../App.css';

function Vaccine() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image className='img' style={{ display: 'block', width: '80vw' }} src={vaccineImg1} preview={false} />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image className='img' style={{ display: 'block', width: '80vw' }} src={vaccineImg2} preview={false} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image className='img' style={{ display: 'block', width: '80vw' }} src={vaccineImg3} preview={false} />
            </div>
        </>
    );
}

export default Vaccine;
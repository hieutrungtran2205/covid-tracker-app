import { Image } from 'antd';
import React from 'react';
import vaccineImg1 from '../images/vaccine1.jpeg';
import vaccineImg2 from '../images/vaccine2.jpg';
import vaccineImg3 from '../images/vaccine3.jpg';
function Vaccine() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={{ display: 'block' }} src={vaccineImg1} preview={false} width={1000} />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={{ display: 'block' }} src={vaccineImg2} preview={false} width={1000} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={{ display: 'block' }} src={vaccineImg3} preview={false} width={1000} />
            </div>
        </>
    );
}

export default Vaccine;
import React from 'react';
import { Select, Image } from 'antd';
import globalIcon from '../images/global.png'

function CountrySelector({ countries, handleOnChange, value, timeUpdate }) {
    return (
        <div className='countrySelector' style={{ margin: '16px 0 0 32px' }}>
            <Select
                showSearch
                style={{ width: 320 }}
                optionFilterProp="children"
                value={value}
                onChange={handleOnChange}
            >
                <Select.Option value="GLOBAL">
                    <Image width={18} height={18} src={globalIcon} preview={false} />
                    <span style={{ marginLeft: '6px' }}>Global</span>
                </Select.Option>
                {countries.map((country, index) => (
                    <Select.Option key={index} value={country.countryInfo.iso3}>
                        <Image width={25} height={18} src={country.countryInfo.flag} preview={false} />
                        {` ${country.country}`}
                    </Select.Option>
                ))}
            </Select>
            <i style={{ marginLeft: '32px' }}>Cập nhật lần cuối vào lúc {timeUpdate}</i>
        </div>
    );
}

export default CountrySelector;
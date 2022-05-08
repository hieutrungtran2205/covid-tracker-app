import React from 'react';
import { Select, Image } from 'antd';
import dayjs from 'dayjs';

function CountrySelector({ countries, handleOnChange, value, timeUpdate }) {
    const { Option } = Select;
    console.log(countries);
    return (
        <div className='countrySelector' style={{ margin: '16px 0 0 32px' }}>
            <Select
                showSearch
                style={{ width: 320 }}
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // }
                // filterSort={(optionA, optionB) =>
                //     optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                // }
                value={value}
                onChange={handleOnChange}
            >
                <Option value="GLOBAL">
                    Global
                </Option>
                {countries.map((country, index) => (
                    <Option key={index} value={country.countryInfo.iso3}>
                        <Image width={25} height={15} src={country.countryInfo.flag} preview={false} />
                        {` ${country.country}`}
                    </Option>
                ))}
            </Select>
            <i style={{ marginLeft: '32px' }}>Cập nhật lần cuối vào lúc {timeUpdate}</i>
        </div>
    );
}

export default CountrySelector;
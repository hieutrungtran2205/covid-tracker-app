import React from 'react';
import { Select } from 'antd';
import './CountrySelector.css';

function CountrySelector({ countries, handleOnChange, value }) {
    const { Option } = Select;
    // console.log('c', countries);
    return (
        <div className='countrySelector'>
            <Select
                showSearch
                style={{ width: 320 }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
                value={value}
                onChange={handleOnChange}
            >
                {countries.map(({ Country, ISO2 }) => (
                    <Option key={ISO2} value={ISO2.toLowerCase()}>
                        {Country}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default CountrySelector;
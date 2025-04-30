import React from 'react';
import { Select } from 'antd';

const Search = ({ employeeData }) => {
    const handleSearch = (value) => {
        const filteredOptions = employeeData.flatMap(group =>
            group.options.filter(option =>
                option.label.props.children.toLowerCase().includes(value.toLowerCase())
            )
        );
        return filteredOptions;
    };

    return (
        <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option?.label?.props?.children?.toLowerCase().includes(input.toLowerCase())
            }
            options={employeeData}
        />
    );
};

export default Search;
import React from 'react'

const SelectInput = ({ children, label, optionDefault, option, ...rest }) => {
    return (
        <>
            <label className='text-md'>{label}</label>
            <select  {...rest} >
                <option value="">
                    {optionDefault}
                </option>
                {children}
            </select>
        </>
    )
}

export default SelectInput

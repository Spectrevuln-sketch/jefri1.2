import React from 'react'
import tw from 'twin.macro'

const InputStyle = tw.input`
w-full
rounded-md
h-10
my-3
focus:border-2
focus:border-blue-200
transition
ease-in-out
hover:border-2
hover:border-blue-200
px-2
`
const InputData = ({ placeholder, label, ...rest }) => {
    return (
        <>
            <label className='font-semibold text-base text-gray-400 focus:text-gray-600'>{label}</label>
            <InputStyle placeholder={placeholder} {...rest} />
        </>
    )
}

export default InputData

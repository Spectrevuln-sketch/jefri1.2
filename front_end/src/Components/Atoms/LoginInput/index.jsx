import React from 'react'
const LoginInput = ({ placeholder, ...rest }) => {
    return (
        <div className=" relative ">
            <input {...rest} type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent hover:border-gray-900" placeholder={placeholder} />
        </div>
    )
}

export default LoginInput

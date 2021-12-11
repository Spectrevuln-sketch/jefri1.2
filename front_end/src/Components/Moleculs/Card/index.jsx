import React from 'react'

const Card = (props) => {
    return (

        <div className={props.className}>
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between items-center text-gray-400 text-lg font-bold">
                    {props.children}
                </div>
            </div>
        </div >

    )
}

export default Card

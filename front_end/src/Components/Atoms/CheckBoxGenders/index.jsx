import React from 'react'
import tw, { css } from "twin.macro";
const Container = tw.div`
 flex
 justify-around
 flex-row
 gap-8
`;
const CheckBoxGenders = ({ data, onChange }) => {
    return (
        <Container>
            {data && (
                data.map(inputData => (

                    <label className="flex flex-row items-center" >
                        <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" onChange={onChange} value={inputData._id} />
                        <span className="ml-2 text-gray-700" >
                            {inputData.type_gender.toUpperCase()}
                        </span >
                    </label >
                ))
            )}

        </Container >
    )
}

export default CheckBoxGenders

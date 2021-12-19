import React from 'react'

const SearchInput = ({ placeholder, ...rest }) => {
    return (
        <div className="de-flex-col">
            <input
                id="quick_search"
                className="xs-hide"
                name="quick_search"
                placeholder={placeholder}
                type="text"
                {...rest}
            />
        </div>
    )
}

export default SearchInput

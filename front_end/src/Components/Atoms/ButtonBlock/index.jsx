import React from 'react'
const ButtonBlock = ({ label, icon, ...rest }) => {
    return (
        <div _ngcontent-bis-c206>
            <button _ngcontent-bis-c206 mat-flat-button {...rest}>
                <span className="mat-button-wrapper">
                    {icon && (
                        <i _ngcontent-bis-c206 className="arx-icon google mr-2" />
                    )}
                    <span _ngcontent-bis-c206>{label}</span>
                </span>
            </button>
        </div>
    )
}

export default ButtonBlock

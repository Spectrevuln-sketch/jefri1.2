import React from 'react'
const SideTabLink = ({ children, ...rest }) => {
    return (
        <aside _ngcontent-woq-c116 className="py-6 lg:col-span-3 hidden lg:block" {...rest}>
            <nav _ngcontent-woq-c116 className="space-y-1">
                {children}

            </nav>
        </aside>
    )
}

export default SideTabLink

import React from 'react'

const Section = ({ children, color }) => {
    return (
        <section className={`section bg-${color}-500 h-screen w-full`}>
            {children}
        </section>
    )
}

export default Section

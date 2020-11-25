import React from 'react'

const Section = ({ children, ref }) => {
    return (
        <section ref={ref} className={`section bg-yellow-300 h-screen w-screen`}>
            {children}
        </section>
    )
}

export default Section

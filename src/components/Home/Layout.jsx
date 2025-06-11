import React from 'react'
import Hero from './Hero'
import Sample from './Sample'
import Contact from './Contact'
import Event from './Event'

const Layout = () => {
    return (
        <div style={{ margin: '0 auto', marginTop: '2rem', padding: '0 1rem' }} className="w-full max-w-[1241px] min-h-screen px-4 md:px-6 py-10 md:py-16 flex flex-col items-center bg-white">
            <Hero />
            <Sample />
            <Event />
            <Contact />
        </div>
    )
}

export default Layout
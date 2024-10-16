import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="bg-404 flex flex-col justify-center items-center min-h-screen text-white pt-96">
            <h1 className="text-6xl font-bold mb-4 italic text-gray-10">404</h1>
            <p className="text-2xl mb-8 text-center">Looks like the page you're looking for doesn't exist.</p>
            <Link href="/">
                <button className="btn_green rounded-5xl hover:bg-green-800">Go back home</button>
            </Link>
        </div>

    )
}

export default NotFound

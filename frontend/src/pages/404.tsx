import React, { Fragment } from 'react';
import Link from 'next/link';

const NotFound = () => {

    return(
        <Fragment>
            <div className="h-screen justify-center items-center flex flex-col space-y-8">
                <h1 className="text-white font-semibold text-4xl">Not found</h1>
                <p className="text-gray-400 text-lg">Requested page not found</p>
                <Link href="/" className="py-4 px-8 bg-gray-700 text-white items-center rounded border border-2 border-gray-800 hover:text-gray-800 hover:bg-white transition"><i className="fa-solid fa-house"></i>&nbsp;Home</Link>
            </div>
        </Fragment>
    )
}

export default NotFound;
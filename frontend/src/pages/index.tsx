import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
    return(
        <Fragment>
            <div className="z-10 flex flex-col items-center space-y-8 py-24 px-4 md:py-32 lg:py-44">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0 hover:cursor-default">
                    <img alt="preciado-pfp" className="rounded-full border-4 border-zinc-500 w-48 h-48 md:w-64 md:h-64 lg:w-[250px] lg:h-[250px]" src="/img/PreciadoPFP.png"></img>
                    <div className="flex flex-col space-y-4 items-center lg:items-start">
                        <h1 className="text-white text-4xl md:text-5xl font-semibold text-center lg:text-left">👋Hi Everyone!</h1>
                        <h1 className="text-white text-2xl md:text-3xl flex flex-row flex-wrap justify-center lg:justify-start">I'm&nbsp;<p className="text-gray-400">Aaron Garces del Garro</p></h1>
                        <div className="flex flex-row items-center space-x-4 flex-wrap justify-center lg:justify-start">
                            <i className="fa-solid fa-desktop text-3xl md:text-4xl text-blue-500"></i>
                            <div className="flex flex-col text-white font-semibold text-lg md:text-xl items-center">
                                <p>Graphics</p>
                                <p>Programmer</p>
                            </div>
                            <i className="fa-solid fa-earth-americas text-3xl md:text-4xl text-rose-600"></i>
                            <div className="flex flex-col text-white font-semibold text-lg md:text-xl items-center">
                                <p>Spain</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-xl justify-center">
                    <a href={`${process.env.GH_LINK as string}`} className="py-3 md:py-4 px-6 md:px-8 rounded bg-gray-800 text-white font-semibold text-lg md:text-xl flex flex-row border border-gray-900 border-2 items-center justify-center space-x-2 hover:bg-white hover:text-black transition hover:cursor-pointer">
                        <i className="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </a>
                    <Link prefetch={true} href="/portfolio" className="py-3 md:py-4 px-6 md:px-8 rounded bg-orange-800 text-white font-semibold text-lg md:text-xl flex flex-row border border-orange-900 border-2 items-center justify-center space-x-2 hover:bg-white hover:text-orange-800 transition hover:cursor-pointer">
                        <i className="fa-solid fa-diagram-project"></i>
                        <p>Portfolio</p>
                    </Link>
                    <a href={`${process.env.LNK_LINK as string}`} className="py-3 md:py-4 px-6 md:px-8 rounded bg-blue-800 text-white font-semibold text-lg md:text-xl flex flex-row border border-blue-900 border-2 items-center justify-center space-x-2 hover:bg-white hover:text-blue-800 transition hover:cursor-pointer">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
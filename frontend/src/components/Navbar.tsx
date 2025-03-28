import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return(
        <Fragment>
            <nav className="flex flex-row justify-between pr-16 pl-20 py-4 items-center bg-gradient-to-b from-neutral-950/80 from-5% via-neutral-950/50 via-50% to-transparent to-95% align-center z-10 sticky top-0">
                <Link href="/" className="text-white font-semibold text-xl invisible xl:visible"><Image alt="preciado-logo" className="hover:cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition rounded-lg border-2 border-transparent pr-1 pt-1" src="/img/PreciadoLogoBg.png" width={60} height={60} /></Link>
                <div className="text-white flex flex-row items-center justify-center font-semibold space-x-4 text-lg hover:cursor-pointer">
                    <Link prefetch={true} href="/portfolio" className="hover:text-gray-400 transition"><i className="fa-brands fa-squarespace text-orange-700 invisible xl:visible"></i>&nbsp;Portfolio</Link>
                    <Link prefetch={true} href="/blog" className="hover:text-gray-400 transition"><i className="fa-solid fa-rss text-green-600 invisible xl:visible"></i>&nbsp;Blog</Link>
                    <Link href="/about" className="hover:text-gray-400 transition"><i className="fa-solid fa-address-card text-red-500 invisible xl:visible"></i>&nbsp;About</Link>
                    <a href={`${process.env.GH_LINK as string}`} className="hover:text-gray-700 text-white transition invisible xl:visible"><i className="fa-brands fa-github"></i></a>
                    <a href={`${process.env.LNK_LINK as string}`} className="text-white hover:text-blue-500 transition invisible xl:visible"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;
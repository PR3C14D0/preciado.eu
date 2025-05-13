import React, { Fragment, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu, { IMenuRef } from './Menu'
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const menuRef = useRef<IMenuRef>(null);
    const router = useRouter();

    const handleClick = () => {
        setIsActive(!isActive);
        menuRef.current?.openMenu();
    }

    useEffect(() => {
        const handleRouterChange = (url: string) => {
            setIsActive(false);
        }
        router.events.on('routeChangeComplete', handleRouterChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouterChange);
        }
    }, [router])
    
    return(
        <Fragment>
            <div className="flex flex-row items-center">
                <nav className="flex flex-row justify-between pr-16 pl-20 py-4 items-center bg-gradient-to-b from-neutral-950/80 from-5% via-neutral-950/50 via-50% to-transparent to-95% align-center z-10 sticky top-0">
                    <Link href="/" className="text-white font-semibold text-xl invisible xl:visible"><Image alt="preciado-logo" className="hover:cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition rounded-lg border-2 border-transparent pr-1 pt-1" src="/img/PreciadoLogoBg.png" width={60} height={60} /></Link>
                </nav>
                <div onClick={() => handleClick()} className="fixed right-15 z-40 flex flex-row items-center hover:cursor-pointer font-fira">
                    <span className="text-white">Menu</span>
                    <div className="flex flex-col space-y-0 p-4">
                        <span className={`w-[30px] h-[3px]  rounded-xl translate-y-[2px]  transition-transform ${isActive ? 'rotate-45 bg-white' : 'rotate-0 bg-white'}`}></span>
                        <span className={`w-[30px] h-[3px] rounded-xl -translate-y-[1px]  transform  transition-transform ${isActive ? '-rotate-45 bg-white' : 'rotate-0 bg-white'}`}></span>
                    </div>
                </div>
            </div>
            <Menu ref={menuRef}/>
        </Fragment>
    )
}

export default Navbar;
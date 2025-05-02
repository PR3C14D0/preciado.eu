import React, { Fragment } from 'react';
import Link from 'next/link';

const Footer = () => {
    return(
        <Fragment>
            <footer className="mx-8 mb-8 mt-16">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center">© 2025 <a href="https://www.preciado.eu/" className="hover:underline">www.preciado.eu</a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Todos los derechos reservados</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                        <li>
                            <Link href="/legal" className="hover:underline me-4 md:me-6 text-sky-500">Aviso legal</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;
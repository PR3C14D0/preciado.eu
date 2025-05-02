import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';

import Head from 'next/head';

import '../css/main.css'

import { cn } from "../lib/utils";
import { GridPattern } from '../components/ui/grid-pattern';
import { AppProps } from 'next/app';
import toast, { Toaster } from 'react-hot-toast';
import { EnvConf } from '@/src/lib/env';


const App = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        document.querySelector("body")?.classList.add("bg-neutral-950")

        if (typeof window !== "undefined" && process.env.PAGE_TITLE) {
            document.title = process.env.PAGE_TITLE as string;
          }
    }, [])
    return(
        <div>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Aaron Garces del Garro Preciado | Developer</title>
                {/* <meta name="title" content="Preciado's portfolio" /> */}
                <meta name="description" content="Aaron Garces del Garro Preciado | Developer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/7a657dfbd9.js"></script>
                <link href="/css/styles.css" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
                <link rel="icon" href="/img/PreciadoLogoBg.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://preciado.eu" />
                <meta property="og:title" content="Preciado" />
                <meta property="og:description" content="Aaron Garces del Garro Preciado | Developer" />
                <meta property="og:image" content="/img/PreciadoLogoBg.png" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1387954522765595" crossOrigin="anonymous"></script>
            </Head>
            <GridPattern width={25} height={25} z={-10} strokeDasharray={"4 2"} className={cn("absolute inset-0 -z-10", "[mask-image:radial-gradient(500px_400px_at_center,white,transparent)]",)}></GridPattern>
            <Toaster />
            <Navbar />
            <Component {...pageProps}/>
        </div>
    )
}

export default App;
import React, { Fragment } from 'react';

const About = () => {
    return(
        <Fragment>
            <div className="flex flex-col min-h-screen overflow-x-hidden snap-y snap-proximity items-center hover:cursor-default">
                <div className="flex flex-col w-full px-4 md:px-8 lg:px-16 snap-center bg-gradient-to-b to-60% from-transparent to-neutral-950 pt-32 md:pt-44 pb-32 md:pb-72">
                    <div className="flex flex-col snap-center justify-center items-center space-y-12">
                        <h1 className="font-mono text-3xl md:text-4xl flex flex-row items-center"><span className="text-green-500">preciado@portfolio:~$&nbsp;</span><span className="text-white">whoami</span></h1>
                        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                            <div className="flex flex-col space-y-8 font-mono max-w-3xl">
                                <h2 className="text-2xl md:text-3xl text-white flex flex-col md:flex-row items-center text-center md:text-left">
                                    <span>My name is Aaron Garces del Garro&nbsp;</span>
                                    <span className="flex flex-row items-center">
                                        <span className="text-cyan-400 hover:underline hover:cursor-pointer" onClick={() => document.location.href = process.env.NEXT_PUBLIC_GH_LINK as string}>Preciado</span>
                                    </span>
                                </h2>
                                <div className="text-xl md:text-2xl text-gray-300 space-y-4 text-center lg:text-left">
                                    <p>Im a 19 years old graphics programmer and Game Developer specialized in low-level rendering and game engine architecture, with over
                                    seven years of hands-on experience in real-time graphics. </p>
                                    <p>Strong focus on modern graphics APIs such as Vulkan, DirectX
                                    12, DirectX 11, OpenGL, and Metal, with particular interest in performance optimization, rendering architecture, and
                                    cross-platform solutions.</p> 
                                    <p>Currently developing a video game using Unreal Engine while leading the development of&nbsp; 
                                    <a className="hover:underline text-cyan-400" href="https://github.com/DravixStudios/Aetherion">Aetherion</a>, a custom cross-platform game engine designed as a long-term learning project around modern rendering
                                    pipelines, engine architecture, and scalability.</p>
                                </div>
                            </div>
                            <img src="/img/PreciadoSky.png" className="rounded-full border-4 border-gray-800 w-48 h-48 md:w-64 md:h-64 lg:w-[250px] lg:h-[250px] hover:border-cyan-700 transition-colors duration-300" alt="Preciado Sky"></img>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;
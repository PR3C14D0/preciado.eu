import React, { Fragment, useEffect } from 'react';

const About = () => {
    let typewriterIndex = 0;
    const typewriting = () => {
        const typed = "whoami";
        const speed = 200;

        const element = document.getElementsByClassName("typewriter")[0];
        if(typewriterIndex < typed.length) {
            element.innerHTML += typed[typewriterIndex];
            typewriterIndex++;
            setTimeout(typewriting, speed);
        }
    }

    useEffect(() => {
        setTimeout(typewriting, 200);
    }, [])

    return(
        <Fragment>
            <div className="flex flex-col min-h-screen overflow-x-hidden snap-y snap-proximity items-center hover:cursor-default">
                <div className="flex flex-col w-full px-4 md:px-8 lg:px-16 snap-center bg-gradient-to-b to-60% from-transparent to-neutral-950 pt-32 md:pt-44 pb-32 md:pb-72">
                    <div className="flex flex-col snap-center justify-center items-center space-y-12">
                        <h1 className="font-mono text-3xl md:text-4xl flex flex-row items-center"><span className="text-green-500">preciado@portfolio:~$&nbsp;</span><span className="text-white typewriter"></span></h1>
                        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                            <div className="flex flex-col space-y-8 font-mono max-w-3xl">
                                <h2 className="text-2xl md:text-3xl text-white flex flex-col md:flex-row items-center text-center md:text-left">
                                    <span>My name is Aaron Garces del Garro</span>
                                    <span className="flex flex-row items-center">
                                        <span className="text-gray-300">&nbsp;A.K.A&nbsp;</span>
                                        <span className="text-cyan-400 hover:underline hover:cursor-pointer" onClick={() => document.location.href = process.env.GH_LINK as string}>Preciado</span>
                                    </span>
                                </h2>
                                <div className="text-xl md:text-2xl text-gray-300 space-y-4 text-center lg:text-left">
                                    <p>I'm 18 years old and I'm from Spain.</p>
                                    <p>I like graphics programming and game development.</p>
                                    <p>I'm currently creating a game engine with C++ and DirectX 12.</p>
                                    <p>I'm also making a game in Unreal Engine 5 called Fiwa.</p>
                                </div>
                            </div>
                            <img src="/img/PreciadoSky.png" className="rounded-full border-4 border-gray-800 w-48 h-48 md:w-64 md:h-64 lg:w-[250px] lg:h-[250px] hover:border-cyan-700 transition-colors duration-300" alt="Preciado Sky"></img>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-neutral-950 from-10% to-transparent to-60% w-full flex flex-col justify-center items-center snap-center py-16 md:py-20 px-4 md:px-8 lg:px-16 space-y-12">
                    <h1 className="text-white font-semibold text-3xl md:text-4xl">Skills</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 w-full max-w-6xl px-4 md:px-8">
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent pt-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-c-plain"></i><p className="font-medium">C</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-cplusplus-plain"></i><p className="font-medium">C++</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-cmake-plain"></i><p className="font-medium">CMake</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-unrealengine-original"></i><p className="font-medium">Unreal</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-unity-original"></i><p className="font-medium">Unity</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-babel-plain"></i><p className="font-medium">Babel</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-bash-plain"></i><p className="font-medium">Bash</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-css3-plain"></i><p className="font-medium">CSS</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-html5-plain"></i><p className="font-medium">HTML</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-react-plain"></i><p className="font-medium">React</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-git-plain"></i><p className="font-medium">Git</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-inkscape-plain"></i><p className="font-medium">Inkscape</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-visualstudio-plain"></i><p className="font-medium">Visual Studio</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-vscode-plain"></i><p className="font-medium">VSCode</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-blender-original"></i><p className="font-medium">Blender</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-webpack-plain"></i><p className="font-medium">Webpack</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-sdl-plain"></i><p className="font-medium">SDL2</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-mongodb-plain"></i><p className="font-medium">MongoDB</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-markdown-original"></i><p className="font-medium">Markdown</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-java-plain"></i><p className="font-medium">Java</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-javascript-plain"></i><p className="font-medium">JavaScript</p></div>
                        <div className='text-white flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700 border-2 border-transparent py-4 px-2 rounded-lg hover:cursor-pointer'><i className="text-4xl sm:text-5xl lg:text-6xl devicon-typescript-plain"></i><p className="font-medium">TypeScript</p></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;
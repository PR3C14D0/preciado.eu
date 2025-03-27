import React, { Fragment, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { EnvConf } from '../lib/env';

const Portfolio: React.FC<{data: Array<{title: string, description: string, ghLink: string, imgUrl: string}>}> = ({ data }) => {
    const [state, setState] = useState<{projects: Array<{title: string, description: string, ghLink: string, imgUrl: string}>}>({projects: []});

    useEffect(() => {
        setState({...state, projects: data});
    }, []); 

    return(
        <Fragment>
            <div className="w-full overflow-x-hidden flex flex-col items-center min-h-screen px-4 md:px-8 space-y-8 md:space-y-16">
                <div className="flex flex-col pt-24 md:pt-32 items-center">
                    <h1 className="text-white font-semibold text-5xl md:text-6xl py-4">Portfolio</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                    {
                        state.projects.map((project: {title: string, description: string, ghLink: string, imgUrl: string}) => (
                            <div className="bg-neutral-900 rounded flex flex-col justify-center items-center border-2 border-zinc-600 max-w-lg mx-auto hover:scale-105 transition">
                                <img className="object-cover max-h-72" src={project.imgUrl} alt={project.title}></img>
                                <div className='px-8 flex flex-col justify-center items-center py-4 space-y-4'>
                                    <h1 className="text-white font-semibold text-2xl md:text-3xl text-center hover:underline hover:text-cyan-500 hover:cursor-pointer transition" onClick={() => document.location.href = project.ghLink} >{project.title}</h1>
                                    <p className="text-center text-gray-200 text-base md:text-lg break-words hover:cursor-default">{project.description}</p>
                                    <button className="py-3 md:py-4 px-6 md:px-8 rounded font-semibold flex flex-row text-lg md:text-xl border-2 bg-cyan-900 text-white border-cyan-700 transition hover:bg-cyan-700 hover:border-cyan-900 hover:cursor-pointer items-center" onClick={() => document.location.href = project.ghLink}><i className="fa-solid fa-bolt"></i>&nbsp;Go to</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
    const env = EnvConf();
    const res = await fetch(`${env.api}/portfolio`, {
        method: 'GET'
    });
    const data = await res.json();

    return {props: { data: data.projects }};
}

export default Portfolio;
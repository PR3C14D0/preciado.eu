import { GetServerSideProps } from 'next';
import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EnvConf } from '../lib/env';

const Blog: React.FC<{data: Array<{title: string, description: string, content: string, imgUrl: string, _id: string}>}> = ({ data }) => {
    const [state, setState] = useState<{posts: Array<{title: string, description: string, content: string, imgUrl: string, _id: string}>}>({posts: []});
    const router = useRouter();

    useEffect(() => {
        setState({...state, posts: data.reverse()});
    }, [])

    return(
        <Fragment>
            <div className="w-full overflow-scroll flex flex-col items-center px-8 space-y-8 static h-screen bg-neutral-950">
                <div className="flex flex-row pt-32 items-left">
                    <h1 className="text-white text-left font-fira text-5xl py-4">Blog</h1>
                </div>
                <div className="flex-col">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            state.posts.length > 0 && state.posts.map((post: {title: string, description: string, content: string, imgUrl: string, _id: string}, index: number) => (
                                <div onClick={() => router.push(`/blog/${post._id}`)} className={`px-4 py-4 hover:cursor-pointer bg-neutral-950 hover:bg-neutral-900 h-fit rounded-2xl flex flex-col transition ${index === 0 ? 'lg:col-span-2 lg:max-h-[800px]' : 'max-w-xl'}`}>
                                    <img className={`rounded-2xl object-cover ${index === 0 ? 'lg:max-h-[512px]' : 'max-h-72'}`} src={post.imgUrl}></img>
                                    <div className='px-8 flex flex-col justify-start items-left py-4 space-y-4'>
                                        <Link prefetch={true} href={`/blog/${post._id}`} className={`pt-4 font-fira text-white font-semibold ${index === 0 ? 'lg:text-4xl text-3xl' : 'text-3xl'} hover:cursor-pointer transition`}>{post.title}</Link>
                                        <div className="flex flex-row items-center pl-2 space-x-2 text-gray-100 font-fira font-thin">
                                            <Image
                                                width={24}
                                                height={24}
                                                className="rounded-full border-2 border-sky-600"
                                                alt="User Avatar"
                                                src="/img/PreciadoPFP.png"
                                            />
                                            <h2 className="text-white">Aaron Garces del Garro</h2>
                                        </div>
                                        <p className={`pt-4 font-fira font-thin text-gray-200 ${index === 0 ? 'lg:text-lg' : 'text-lg'} break-all hover:cursor-default`}>{post.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const env = EnvConf();
    const res = await fetch(`${env.api}/blog`, {
        method: 'GET'
    });
    const data = await res.json();

    return {props: { data: data.posts.reverse() }};
}

export default Blog;
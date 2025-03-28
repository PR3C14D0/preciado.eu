import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import toast, { Toaster } from 'react-hot-toast';
import { EnvConf } from '@/src/lib/env';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const ViewPost: React.FC<{data: {title:string, imgUrl: string, content: string, description:string, _id: string}}> = ({data}) => {
    const router = useRouter();
    const [state, setState] = useState<{title:string; imgUrl: string; content: string; description:string; _id: string}>({title: "", imgUrl: "", content: "", description: "", _id: ""});

    useEffect(() => {
        setState({...state, ...data});
        if(data.title) {
            document.title = data.title;
        }

        const hash: string | undefined = window.location.hash;

        if(hash) {
            const id = hash.replace('#', '');
            const element: HTMLElement | null = document.getElementById(id);
            if(element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth'})
                }, 100)
            }
        }
    }, [data]);

    const copyLink = (event: React.MouseEvent) => {
        const elementId = (event.target as HTMLElement).id;
        toast('Copied to clipboard!',
            {
              icon: '📋',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
              },
            }
          );

        navigator.clipboard.writeText(`${window.location.href}#${elementId}`);
    }

    return(
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-[70vh] overflow-hidden z--10">
                <Image
                    src={state.imgUrl}
                    alt={state.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 from-10% via-neutral-950/80 via-50% to-90% to-neutral-950/40"></div>
            </div>

            {/* Title Section */}
            <div className="relative top-[30vh] left-1/2 transform -translate-x-1/2 text-center max-w-3xl px-4">
                <h1 className="text-4xl font-fira mb-4">{state.title}</h1>
                <div className="flex justify-center items-center space-x-4 mb-4">
                    <Image
                        width={36}
                        height={36}
                        className="rounded-full border-2 border-sky-600"
                        alt="User Avatar"
                        src="/img/PreciadoPFP.png"
                    />
                    <h2 className="text-sm font-thin">Aaron Garces del Garro</h2>
                </div>
                <p className="text-lg font-fira font-thin italic text-gray-300">{state.description}</p>
            </div>

            {/* Article Content */}
            <div className="mt-[40vh] px-6 pt-20 pb-12 bg-neutral-950 max-w-4xl mx-auto font-fira space-y-4">
                    <Markdown
                    components={{
                        h1: ({children}) => <h1 onClick={copyLink} className="pb-8 text-4xl font-fira mt-4 mb-2 flex flex-row items-center group hover:cursor-pointer">
                                <i className="opacity-0 group-hover:opacity-100 transition fa-solid fa-link text-gray-600 text-xl"></i>
                                &nbsp;&nbsp;
                                {
                                    (typeof children === 'string') ? (
                                        <div id={children.toLowerCase().replace(/\s+/g, '-')} className="flex flex-col">
                                          {children}
                                        </div>
                                      ) : <></>
                                }
                            </h1>,
                        a: ({children, href}) => <a href={href} className="font-fira text-sky-400 hover:text-sky-600 hover:underline transition">{children}</a>,
                        p: ({children}) => <p className="text-white font-fira text-lg">{children}</p>,
                        li: ({className, children}) => <li className={`${className ? className : ""} pl-8 flex flex-row space-x-1 items-center`}>•&nbsp;&nbsp;{children}</li>,
                        code: ({node, className, children, ...props}) => {
                            const match = /language-(\w+)/.exec(className || '')
                            const language = match ? match[1] : 'text'

                            const isLanguage = (language != 'text');

                            return isLanguage ? (
                                <SyntaxHighlighter
                                    {...props}
                                    language={language}
                                    style={atomDark}
                                    PreTag="div"
                                    showLineNumbers
                                    className={className + " rounded-lg border-2 border-neutral-700"}
                                >
                                    {String(children)}
                                </SyntaxHighlighter>
                            ) : (
                                <p className="bg-neutral-800 py-1 px-1">{String(children)}</p>
                            )
                        },
                        table: ({className, children}) => <div className={className + " border-neutral-900 border-2 rounded-xl px-6 py-4 w-auto items-center justify-center flex-col"}><table className="">{children}</table></div>,
                        thead: ({className, children}) => <thead className={className + " flex-row items-center"}>{children}</thead>,
                        th: ({className, children}) => <th className={`${className ? className : ""} pb-8`}>{children}</th>,
                        td: ({className, children}) => <td className={`${className ? className : ""} pb-4 px-4`}>{children}</td>,
                        ul: ({className, children}) => <ul className={`${className ? className : ""} flex-col space-y-4`}>{children}</ul>,
                        
                    }}
                     remarkPlugins={[remarkGfm]} 
                     rehypePlugins={[rehypeSanitize]}>
                        {`${state.content}`}
                    </Markdown>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { query } = context;
    const env = EnvConf();
    const res = await fetch(`${env.api}/blog/${query.id}`, {
        method: 'GET'   
    });

    const data = await res.json();

    return {props: {data: data.post}}
}

export default ViewPost;
import React, { 
    Fragment, 
    useImperativeHandle, 
    forwardRef, 
    useState, 
    useEffect,
    useRef
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { gsap } from 'gsap';
import SplitType from 'split-type';

export interface IMenuRef {
    openMenu: () => void
}

const Menu = forwardRef((props, ref) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const menuRef = useRef(null);
    const subMenuRef = useRef(null);

    const router = useRouter();

    const [navLinks, setNavLinks] = useState<Array<{href: string, label: string, key: string, isActive: boolean}>>([
        {href: '/', label: 'Home', key: 'home', isActive: false},
        {href: '/blog', label: 'Blog', key: 'blog', isActive: false},
        {href: '/portfolio', label: 'Portfolio', key: 'portfolio', isActive: false},
        {href: '/about', label: 'About', key: 'about', isActive: false},
    ])

    useImperativeHandle(ref, () => ({
        openMenu: () => {
            setMenuOpen(prev => !prev),
            setHasInteracted(true);
        }
    }))

    useEffect(() => {
        const handleRouterChange = (url: string) => {
            setMenuOpen(false);
        }
        router.events.on('routeChangeComplete', handleRouterChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouterChange);
        }
    }, [router])

    useEffect(() => {
        const links = document.querySelectorAll('.menu-link');
        
        links.forEach(link => {
            const split = new SplitType(link as HTMLElement, {types: 'chars'});
            const computedStyle = getComputedStyle(link);
            const ogColor = computedStyle.color;

            link.addEventListener('mouseenter', (e) => {
                gsap.to(split.chars, {
                    y: -10,
                    color: '#bfb8bf',
                    stagger: 0.05,
                    duration: 0.3,
                    ease: 'power2.out',
                    onStart: () => {
                        setIsTransitioning(true);
                    },
                    onComplete: () => {
                        setIsTransitioning(false)
                    }
                })
            })

            link.addEventListener('mouseleave', (e) => {
                gsap.to(split.chars, {
                    y: 0,
                    color: ogColor,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: 'power2.in',
                    onStart: () => {
                        setIsTransitioning(true);
                    },
                    onComplete: () => {
                        setIsTransitioning(false)
                    }
                })
            })

            return () => split.revert();
        })

        if(menuOpen && subMenuRef.current && !isTransitioning) {
             gsap.fromTo(subMenuRef.current,
                    { y: '-100%' },
                    { 
                        y: '0%',
                        duration: 0.5,
                        ease: 'power2.out',
                        onStart: () => {
                            setIsTransitioning(true);
                        },
                        onComplete: () => {
                            setIsTransitioning(false)
                        }
                    }
                );
        } else if(!menuOpen && subMenuRef.current && !isTransitioning) {
            gsap.fromTo(subMenuRef.current,
                    { y: '0%' },
                    { 
                        y: '-100%',
                        duration: 0.5,
                        ease: 'power2.in',
                        delay: 0.2,
                        onStart: () => {
                            setIsTransitioning(true);
                        },
                        onComplete: () => {
                            setMenuOpen(false);
                            setIsTransitioning(false);
                        }
                    }
                );
        }

        if (menuOpen && menuRef.current && !isTransitioning) {
            gsap.fromTo(menuRef.current,
                    { y: '-100%' },
                    { 
                        y: '0%',
                        duration: 0.5,
                        ease: 'power2.out', 
                        delay: 0.2,
                        onStart: () => {
                            setIsTransitioning(true);
                        },
                        onComplete: () => {
                            setIsTransitioning(false)
                        }
                    }
                );
        } else if (!menuOpen && menuRef.current && !isTransitioning) {

            gsap.fromTo(menuRef.current,
                { y: '0%' },
                {
                    y: '-100%',
                    duration: 0.5,
                    ease: 'power2.in',
                    onStart: () => {
                        setIsTransitioning(true);
                    },
                    onComplete: () => {
                        setMenuOpen(false);
                        setIsTransitioning(false);
                    }
                }
            );
        }
    }, [menuOpen])

    return (
        <Fragment>
            {
                hasInteracted && (
                    <div>
                        <div ref={subMenuRef} className="fixed top-0 left-0 z-15 items-center w-full h-full bg-[#5e165e] "></div>
                        <div ref={menuRef} className="fixed top-0 left-0 z-20 items-center w-full h-full bg-red-900">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="top-1/2 flex flex-col p-16 border-b-2 border-l-2 border-neutral-950">
                                    <ul className="flex flex-col space-y-4">
                                        {
                                            navLinks.map((link) => {
                                                return (
                                                    <li key={link.key}>
                                                        <Link className="menu-link text-white text-8xl font-anton" href={link.href}>{link.label}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
})

export default Menu;
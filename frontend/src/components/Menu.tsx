import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export interface IMenuRef {
  toggle: (open: boolean) => void;
}

const Menu = forwardRef<IMenuRef>((_, ref) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/blog', label: 'Blog', key: 'blog' },
    { href: '/portfolio', label: 'Portfolio', key: 'portfolio' },
    { href: '/about', label: 'About', key: 'about' },
  ];

  /* ===== Imperative API ===== */
  useImperativeHandle(ref, () => ({
    toggle(value: boolean) {
      if (isAnimating.current) return;
      setOpen(value);
    }
  }));

  /* ===== Close on route change ===== */
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeComplete', close);
    return () => router.events.off('routeChangeComplete', close);
  }, [router]);

  /* ===== Animations ===== */
  useEffect(() => {
    if (!menuRef.current || !subMenuRef.current) return;

    isAnimating.current = true;

    if (open) {
      gsap
        .timeline({
          onComplete: () => {isAnimating.current = false},
        })
        .fromTo(
          subMenuRef.current,
          { y: '-100%' },
          { y: '0%', duration: 0.4, ease: 'power2.out' }
        )
        .fromTo(
          menuRef.current,
          { y: '-100%' },
          { y: '0%', duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
    } else {
      gsap
        .timeline({
          onComplete: () => {isAnimating.current = false},
        })
        .to(menuRef.current, {
          y: '-100%',
          duration: 0.4,
          ease: 'power2.in',
        })
        .to(
          subMenuRef.current,
          {
            y: '-100%',
            duration: 0.3,
            ease: 'power2.in',
          },
          '-=0.2'
        );
    }
  }, [open]);

  /* ===== SplitType hover ===== */
  useEffect(() => {
    const links = document.querySelectorAll('.menu-link');
    const splits: SplitType[] = [];

    links.forEach(link => {
      const split = new SplitType(link as HTMLElement, { types: 'chars' });
      splits.push(split);

      link.addEventListener('mouseenter', () => {
        gsap.to(split.chars, {
          y: -10,
          stagger: 0.04,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(split.chars, {
          y: 0,
          stagger: 0.04,
          duration: 0.3,
          ease: 'power2.in',
        });
      });
    });

    return () => splits.forEach(s => s.revert());
  }, []);

  return (
    <Fragment>
      <div
        ref={subMenuRef}
        className="fixed top-0 left-0 z-20 w-full h-full bg-[#5e165e] -translate-y-full"
      />
      <div
        ref={menuRef}
        className="fixed top-0 left-0 z-30 w-full h-full bg-red-900 -translate-y-full"
      >
        <div className="flex h-full items-center justify-center">
          <ul className="flex flex-col space-y-6 p-16 border-b-2 border-l-2 border-neutral-950">
            {navLinks.map(link => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="menu-link text-white text-8xl font-anton"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
});

Menu.displayName = 'Menu';
export default Menu;
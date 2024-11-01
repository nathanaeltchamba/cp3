"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Ensure the navbar remains visible at the top of the page
        if (currentScrollTop <= 0) {
            setScrollingUp(true);
        } else {
            setScrollingUp(currentScrollTop < lastScrollTop);
        }

        setLastScrollTop(currentScrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            {/* Main Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-30 py-5 transition-transform duration-300 ease-in-out ${scrollingUp ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="relative flexBetween padding-container mx-28">
                    <Link href="/">
                        <Image src="/cp3.png" alt="logo" width={124} height={29} />
                    </Link>
                    <ul className="hidden h-full gap-12 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link
                                    href={link.href}
                                    className="regular-20 text-gray-300 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-500 hover:font-bold">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Image
                        src="/menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                        onClick={toggleMenu}
                    />
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 w-full lg:hidden h-full bg-black bg-opacity-60 backdrop-blur-md text-gray-100 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-white text-2xl">
                    &times;
                </button>
                <div className="flex flex-col items-center py-6">
                    <Link href="/">
                        <Image src="/logo-nav.png" alt="logo" width={174} height={29} />
                    </Link>
                </div>
                <ul className="flex flex-col items-center justify-center h-full pb-72">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key} className="mb-6">
                            <Link
                                href={link.href}
                                className="text-2xl text-gray-100 cursor-pointer transition-all hover:text-green-500 hover:font-bold"
                                onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;

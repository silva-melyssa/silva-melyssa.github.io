'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className='bg-white dark:bg-black py-4 border-t border-gray-200 dark:border-gray-700'>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-[144px]">

                {/* Desktop View */}
                <div className="hidden lg:flex items-center justify-between p-4 w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90">
                    <div className="flex space-x-8">
                        <Link href="/" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">Home</Link>
                        <Link href="/about" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">About</Link>
                        <Link href="/projects" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">Projects</Link>
                        <Link href="/uses" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">Uses</Link>
                    </div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[14px] font-[400] leading-[24px]">
                        © 2024 John Doe. All rights reserved.
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 flex flex-col items-center p-4 w-full space-y-4">
                    <div className="flex flex-wrap justify-center space-x-8">
                        <Link href="/" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">Home</Link>
                        <Link href="/about" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">About</Link>
                        <Link href="/projects" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">Projects</Link>
                        <Link href="/uses" className="text-black dark:text-white text-[16px] font-[400] leading-[28px] cursor-pointer hover:text-teal-500 dark:hover:text-teal-300">Uses</Link>
                    </div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[14px] font-[400] leading-[24px] text-center">
                        © 2024 John Doe. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

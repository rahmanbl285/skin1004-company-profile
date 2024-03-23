'use client'

import Link from "next/link"
import { useState } from "react"

export default function NavBar () {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    return (
        <div className="fixed bg-[#ececec] z-30 w-screen">
            <div className="mx-auto pr-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 ml-9">
                            <Link href={'/'}
                                className="tracking-[0.4em] text-[#a8915f] font-bold"
                                >SKIN1004
                            </Link>  
                        </div>
                    </div>

                    <div className="hidden md:block pr-4">
                        <div className="flex items-center space-x-8 text-sm text-[#a8915f]">
                            <Link href={'/'} className="font-bold">HOME</Link>
                            <Link href={'/about-us'}>ABOUT US</Link>
                            <Link href={'/products'}>PRODUCTS</Link>
                            <Link href={'/our-teams'}>OUR TEAMS</Link>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button 
                        onClick={toggleNavbar}
                        className="inline-flex items-center justify-center p-2 rounded-md text-[#a8915f] hover:text-[#a8915f] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ececec]"
                        >
                            {isClick ? (
                                <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (
                                <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
                    {isClick && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 text-sm space-y-2 sm:px-3 font-semibold text-[#a8915f] bg-[#ececec]">
                                <Link href={'/'} className="block">HOME</Link>
                                <Link href={'/about-us'} className="block">ABOUT US</Link>
                                <Link href={'/services'} className="block">SERVICES</Link>
                                <Link href={'/our-teams'} className="block">OUR TEAMS</Link>
                            </div>
                        </div>
                    )}
        </div>
    )
    };
'use client'

import { Rating } from "flowbite-react";
import Image from "next/legacy/image";
import React from "react";

interface iCardTemplate {
    imageSrc: string;
    title: string;
    rating: number
  }

export default function CardTemplate ({imageSrc, title, rating}:iCardTemplate) {
    return (
         <div className="mx-5 max-w-sm h-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            {/* image */}
            <div className='relative h-[200px] w-full'>
               <Image className="object-cover " 
               src={imageSrc}
               alt={title}
               layout='fill' />
            </div>
            
            {/* title */}
            <div className="flex flex-col items-center justify-center p-5 overflow-hidden">
               <h5 className="mb-2 uppercase text-sm text-center font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
               <div className="flex items-center justify-center">
                <Rating>
                    <Rating.Star />
                        <p className="ml-2 text-xs font-bold text-gray-900 dark:text-white">{rating}</p>
                        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                        <p className="text-xs font-medium text-gray-900 underline hover:no-underline dark:text-white">
                            73 reviews
                        </p>
                    </Rating>
               </div>
            </div>
         </div>
    )
}
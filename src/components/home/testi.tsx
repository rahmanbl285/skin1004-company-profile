'use client';

import { Card, Rating } from 'flowbite-react';
import Image from 'next/legacy/image';
import { FaThumbsUp } from "react-icons/fa6";

export default function TestimonialHome() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    
    {/* Card 1 */}
        <Card className="max-w-sm">

                {/* image */}
                <div className='flex flex-1 gap-5'>
                    <div className='h-16 w-16 min-h-16 min-w-16 relative'>
                        <Image
                            src="https://ucarecdn.com/234780fb-0f82-4e2f-8f4c-81c0fcc7e537/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%203.jpg"
                            alt='...'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                    
                    {/* bagian nama */}
                    <h6 className='text-sm font-semibold'>ini bagian nama</h6>

                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                        </Rating>
                    </div>
            </div>

            {/* Text */}
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-xs'> <FaThumbsUp className='inline' /> recommends this product!</h6>
                <p className="text-sm text-gray-700 dark:text-gray-400 text-justify">
                Bagus banget!!! Bener kata orang orang skin1004 bagus semua. Jerawat kempes dan memudar, btw aku pakai yg pink dan yg putih jg semuanya bagus. Kalau pemula boleh coba pakai ini. Udh repurchase kebeberapa kalinya dan serum yg putih jg udah beli 2x
                </p>
            </div>

        </Card>

    {/* Card 2 */}
        <Card className="max-w-sm">

            {/* image */}
            <div className='flex flex-1 gap-5'>
                <div className='h-16 w-16 min-h-16 min-w-16 relative'>
                    <Image
                        src="https://ucarecdn.com/234780fb-0f82-4e2f-8f4c-81c0fcc7e537/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%203.jpg"
                        alt='...'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full'
                    />
                </div>
                <div className='flex flex-col justify-center gap-1'>
                
                {/* bagian nama */}
                <h6 className='text-sm font-semibold'>ini bagian nama</h6>

                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                    </Rating>
                </div>
            </div>

            {/* Text */}
            <div className='flex flex-col gap-2'>
            <h6 className='font-bold text-xs'> <FaThumbsUp className='inline' /> recommends this product!</h6>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-justify">
            Bagus banget!!! Bener kata orang orang skin1004 bagus semua. Jerawat kempes dan memudar, btw aku pakai yg pink dan yg putih jg semuanya bagus. Kalau pemula boleh coba pakai ini. Udh repurchase kebeberapa kalinya dan serum yg putih jg udah beli 2x
            </p>
            </div>

            </Card>

    {/* Card 3 */}
        <Card className="max-w-sm max-sm:pb-2">

            {/* image */}
            <div className='flex flex-1 gap-5'>
                <div className='h-16 w-16 min-h-16 min-w-16 relative'>
                    <Image
                        src="https://ucarecdn.com/234780fb-0f82-4e2f-8f4c-81c0fcc7e537/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%203.jpg"
                        alt='...'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full'
                    />
                </div>
                <div className='flex flex-col justify-center gap-1'>
                
                {/* bagian nama */}
                <h6 className='text-sm font-semibold'>ini bagian nama</h6>

                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                    </Rating>
                </div>
            </div>

            {/* Text */}
            <div className='flex flex-col gap-2'>
            <h6 className='font-bold text-xs'> <FaThumbsUp className='inline' /> recommends this product!</h6>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-justify">
            Bagus banget!!! Bener kata orang orang skin1004 bagus semua. Jerawat kempes dan memudar, btw aku pakai yg pink dan yg putih jg semuanya bagus. Kalau pemula boleh coba pakai ini. Udh repurchase kebeberapa kalinya dan serum yg putih jg udah beli 2x
            </p>
            </div>

            </Card>



    </div>
  );
}

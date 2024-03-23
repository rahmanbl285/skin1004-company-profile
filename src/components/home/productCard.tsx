'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';

export default function ProductCard() {
  return (
   
   <div className="flex flex-col w-full h-full bg-[#a8915f]">
      <div className='flex pt-24 items-center justify-center mb-10'>
         <h2 className="text-3xl font-bold text-[#ececec] "> Our Best Product!</h2>
      </div>

      <div className='overflow-auto max-sm:pb-5 max-md:gap-5 grid grid-cols-4 max-sm:gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 pb-12 justify-center items-center'>
         <div className="mx-5 max-w-sm max-h-lvh bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            {/* image */}
            <div className='relative h-[200px] w-full'>
               <Image className="object-cover " 
               src="https://skin1004.com/cdn/shop/products/skin1004-others--madagascar-centella-travel-kit-34541183795446_800x.png?v=1642564420"
               alt="Centella Line"
               layout='fill' />
            </div>
            
            {/* title */}
            <div className="p-5 overflow-hidden">
               <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Centella Line</h5>
                  <p className='text-xs text-justify'>Believing that good skincare products begin from high-quality ingredients, SKIN1004 is persistent in using the finest Madagascan centella leaves to produce the Centella Line. </p>
            </div>
         </div>

         <div className="mx-5 max-w-sm max-h-lvh bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            {/* image */}
            <div className='relative h-[200px] w-full'>
               <Image className="object-cover " 
               src="https://skin1004.com/cdn/shop/files/skin1004-hydration-set-40032067617014_1000x1000.png?v=1709704920"
               alt="Hyalu-Cica"
               layout='fill' />
            </div>
            
            {/* title */}
            <div className="p-5 overflow-hidden">
               <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Hyalu-Cica</h5>
                  <p className='text-xs text-justify'>The HYALU-CICA line is a collection of moisturizing skincare products with SKIN1004s signature Hyalu-Cica Formula, the golden ratio of hyaluronic acid and cica. </p>
            </div>
         </div>

         <div className="mx-5 max-w-sm max-h-lvh bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            {/* image */}
            <div className='relative h-[200px] w-full'>
               <Image className="object-cover " 
               src="https://skin1004.com/cdn/shop/products/skin1004-tone-brightening-set-capsule-ampoule-boosting-toner-cleansing-gel-foam-36667525628150_600x600.png?v=1645173170"
               alt="Tone Brightening"
               layout='fill' />
            </div>
            
            {/* title */}
            <div className="p-5 overflow-hidden">
               <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tone Brightening</h5>
                  <p className='text-xs text-justify'>The Tone Brightening line is specifically formulated to treat hyperpigmentation, discoloration and inflammation all at once by brightening the skin tone. </p>
            </div>
         </div>

         <div className="mx-5 max-w-sm max-h-screen bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            {/* image */}
            <div className='relative h-[200px] w-full'>
               <Image className="object-cover " 
               src="https://skin1004.com/cdn/shop/products/skin1004-poremizing-set-37182133338358_800x800.png?v=1653985417"
               alt="Poremizing"
               layout='fill' />
            </div>
            
            {/* title */}
            <div className="p-5 overflow-hidden">
               <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Poremizing</h5>
                  <p className='text-xs text-justify'>The Poremizing line is a collection of pore minimizing skincare products infused with Himalayan pink salt.</p>
            </div>
         </div>

      </div>

      <div className='flex justify-center items-center mb-10'>
      <Link href="/products" 
         className="inline-flex px-3 py-2 text-sm font-medium text-center text-[#3f3422] bg-[#ececec] rounded-lg w-fit">
            View All Products
      </Link>
      </div>
   </div>
 );
}

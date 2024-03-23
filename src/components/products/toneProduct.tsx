'use client'

import CardTemplate from "./productTemplate";

export default function ToneProduct () {
    return (
        <div className='overflow-auto max-sm:pb-5 max-md:gap-5 grid grid-cols-3 gap-y-3 max-sm:gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 pb-12 justify-center items-center'>
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-ampoule-serum-100ml-brightening-capsule-ampoule-38642788630774_1800x1800.png?v=1677148702"} 
                title={"TONE BRIGHTENING CAPSULE AMPOULE"}    
                rating={4.75}            
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-cream-tone-brightening-capsule-cream-38642938314998_1800x1800.png?v=1677150683"} 
                title={"TONE BRIGHTENING CAPSULE CREAM"} 
                rating={4.5}               
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-cleanser-125ml-tone-brightening-cleansing-gel-foam-38642975965430_1800x1800.png?v=1677151217"} 
                title={"TONE BRIGHTENING CLEANSING GEL FOAM"} 
                rating={4.3}               
            />
        </div>
    )
}
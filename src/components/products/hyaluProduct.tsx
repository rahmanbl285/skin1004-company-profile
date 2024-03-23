'use client'

import CardTemplate from "./productTemplate";

export default function HyaluProduct () {
    return (
        <div className='overflow-auto max-sm:pb-5 max-md:gap-5 grid grid-cols-3 gap-y-3 max-sm:gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 pb-12 justify-center items-center'>
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/files/skin1004-sun-hyalu-cica-water-fit-sun-serum-spf50-pa-40032144490742_1000x1000.png?v=1709706364"} 
                title={"HYALU-CICA WATER-FIT SUN SERUM SPF50+ PA++++"}    
                rating={4.8}            
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/files/skin1004-sun-hyalu-cica-silky-fit-sun-stick-40032143180022_1000x1000.png?v=1709706355"} 
                title={"HYALU-CICA SILKY-FIT SUN STICK"} 
                rating={4.7}               
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/files/skin1004-ampoule-serum-hyalu-cica-blue-serum-40032061096182_1000x1000.png?v=1709704927"} 
                title={"HYALU-CICA BLUE SERUM"} 
                rating={4.8}               
            />
        </div>
    )
}
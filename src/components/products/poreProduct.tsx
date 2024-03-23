'use client'

import CardTemplate from "./productTemplate";

export default function PoreProduct () {
    return (
        <div className='overflow-auto max-sm:pb-5 max-md:gap-5 grid grid-cols-3 gap-y-3 max-sm:gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 pb-12 justify-center items-center'>
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38642870780150_1800x1800.png?v=1677149786"} 
                title={"POREMIZING FRESH AMPOULE"}    
                rating={4.75}            
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-poremizing-deep-cleansing-foam-38642870223094_800x.png?v=1677149782"} 
                title={"POREMIZING DEEP CLEANSING FOAM"} 
                rating={4.5}               
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-poremizing-light-gel-cream-38642871730422_1800x1800.png?v=1677149789"} 
                title={"POREMIZING LIGHT GEL CREAM"} 
                rating={4.3}               
            />
        </div>
    )
}
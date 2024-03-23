'use client'

import CardTemplate from "./productTemplate";

export default function CentellaProduct () {
    return (
        <div className='overflow-auto max-sm:pb-5 max-md:gap-5 grid grid-cols-3 gap-y-3 max-sm:gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 pb-12 justify-center items-center'>
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-ampoule-serum-centella-ampoule-38642800132342_1800x1800.png?v=1677148695"} 
                title={"Centella Ampoule"}    
                rating={4.75}            
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-sun-50ml-centella-air-fit-suncream-plus-spf50-pa-38642816647414_1800x1800.png?v=1677149072"} 
                title={"CENTELLA AIR-FIT SUNCREAM PLUS SPF50+ PA++++"} 
                rating={4.5}               
            />
            <CardTemplate 
                imageSrc={"https://skin1004.com/cdn/shop/products/skin1004-cream-centella-soothing-cream-38642833588470_1800x1800.png?v=1677149426"} 
                title={"CENTELLA SOOTHING CREAM"} 
                rating={4.3}               
            />
        </div>
    )
}
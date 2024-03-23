import Image from "next/legacy/image";

export default function BrandOverview() {
    return (
        <div className="flex max-sm:flex-col h-full w-full p-16 max-sm:p-10 bg-[#fbf9f7] gap-10 max-sm:gap-16">
                
            <div className="relative max-h-full max-sm:h-80 max-sm:w-full w-1/2">
                <Image
                    src={'https://ucarecdn.com/52188264-6b84-429b-bada-22aedfa1432c/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Overview.jpg'}
                    alt="..."
                    layout="fill"
                    className="object-cover rounded-lg"
                />
            </div>
                    
            <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/2">
                <div className="flex flex-col gap-2">
                    <h4 className="text-3xl md:text-5xl tracking-[0.2em] font-bold text-[#a8915f]">SKIN1004</h4>
                    <h6 className="text-sm md:text-md font-bold bg-[#a8915f] text-[#fbf9f7] py-1 px-4 max-w-fit rounded-e-full mb-4">BRAND OVERVIEW</h6>
                </div>
                <div className="flex flex-col gap-2 text-justify text-[#3f3422] font-medium">
                    <p>SKIN1004 is an award-winning hypoallergenic and natural skincare brand from Korea. Our main ingredient, CENTELLA ASIATICA, originating from the untouched nature of MADAGASCAR, is one of the worlds finest Centella.</p>
                    <p>Our products are special in that all of our products are infused with high quality Centella extract. All products are very mild, soothing, extra-light and non comedogenic to provide breathable, non-sticky, and soft finish.</p>
                    <p>Our core value is to distribute our well-crafted natural skincare products at affordable prices. We are proud to be a clean beauty brand and have acquired certifications to prove so, such as CGMP, Beauty without Bunnies, cruelty-free & vegan through PETA, etc. We will always continue to practice ethical and clean beauty business practices.</p>
                </div>
            </div>
        </div>
    )
}

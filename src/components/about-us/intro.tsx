import Image from "next/legacy/image";
import { Carousel } from "flowbite-react";

export default function Introduction() {
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen max-sm:h-full w-full p-10 md:p-16 bg-[#a8915f] gap-10 md:gap-10 overview-auto">
                
            <div className="relative h-80 md:h-full w-full md:w-1/2 lg:w-1/2">
            <Carousel slideInterval={5000}>
                <div className="w-full h-full relative">
                    <Image
                        src={'https://ucarecdn.com/7c111bbd-adc4-4867-a46c-55166ea65f71/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%202.jpg'}
                        alt="image 2"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src={'https://ucarecdn.com/234780fb-0f82-4e2f-8f4c-81c0fcc7e537/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%203.jpg'}
                        alt="image 3"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src={'https://ucarecdn.com/9c8e7642-33ce-478d-8d30-80b5cac3f4ad/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%204.jpg'}
                        alt="image 4"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
            </Carousel>
            </div>
                    
            <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/2">
                <div className="flex flex-col gap-2">
                    <h4 className="text-3xl md:text-5xl tracking-[0.2em] font-bold text-[#fbf9f7]">SKIN1004</h4>
                    <h6 className="text-md font-bold bg-[#fbf9f7] text-[#a8915f] py-1 px-4 max-w-fit rounded-e-full mb-4">INTRODUCING</h6>
                </div>
                <div className="flex flex-col gap-2 text-justify text-[#fbf9f7] text-base font-medium">
                    <p>SKIN1004 is also an award-winning hypoallergenic and natural skincare brand from Korea. Our main ingredient, CENTELLA ASIATICA, originating from the untouched nature of MADAGASCAR, is one of the worlds finest Centella.</p>
                    <p>Our products are special in that all of our products are infused with high quality Centella extract. All products are very mild, soothing, extra-light and non comedogenic to provide breathable, non-sticky, and soft finish.</p>
                    <p>Our core value is to distribute our well-crafted natural skincare products at affordable prices. We are proud to be a clean beauty brand and have acquired certifications to prove so, such as CGMP, Beauty without Bunnies, cruelty-free & vegan through PETA, etc. We will always continue to practice ethical and clean beauty business practices.</p>
                </div>
            </div>
        </div>
    )
}

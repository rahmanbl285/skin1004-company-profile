import BrandOverview from "@/components/about-us/brand";
import HeaderAboutUs from "@/components/about-us/first";
import Introduction from "@/components/about-us/intro";
import Journey from "@/components/about-us/journey";
import Image from "next/legacy/image";

export default function AboutUs () {
    return (
        <div className="flex flex-col">
            <div className="bg-[url('https://skin1004.com/cdn/shop/files/231223_Flagship_Store_5_1.png?v=1708593861')]
            w-full h-[350px] bg-bottom bg-[#a8915f] bg-blend-multiply
            ">
                <div className="flex flex-col justify-content items-center py-36 gap-2">
                    <h1 className="font-bold text-[#ececec] text-5xl max-sm:text-4xl tracking-[0.4em]">SKIN1004</h1>
                    <h6 className="text-[#ececec] max-sm:text-sm text-center font-bold bg-[#a8915f] py-2 px-4 rounded-full">DELIVERING YOU THE UNTOUCHED NATURE</h6>
                </div>
            </div>

            <HeaderAboutUs />
            <BrandOverview />
            <Introduction />
            <Journey />

        </div>
    )
}
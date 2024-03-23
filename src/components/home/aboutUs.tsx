import Image from "next/legacy/image";
import Link from "next/link";

export default function AboutUsHome() {
    return (
        <div className="bg-[#ececec] h-screen w-full flex max-sm:flex-col relative overflow--auto">

        {/* IMAGE */}
        <div className="w-1/2 h-screen relative max-sm:w-full">
            <Image src="https://ucarecdn.com/9c8e7642-33ce-478d-8d30-80b5cac3f4ad/-/format/auto/-/preview/3000x3000/-/quality/lighter/About%20Skin1004%20Introducing%204.jpg" 
            alt=""
            layout="fill"
            className="object-cover" />
        </div>

        {/* TEXT */}
        <div className="w-1/2 max-sm:w-full h-full max-sm:h-full flex flex-col justify-center max-sm:py-6 px-16 gap-6 overflow-visible break-words">
            <h1 className="text-5xl max-sm:text-4xl font-extrabold text-[#a8915f] text-left">ABOUT US</h1>
            <div className="">
                    <p className="text-justify text-[#3f3422]/75">When you pronounce, 1004, in Korean, it sounds the same way as the word, Angel. 천사 or Cheon-Sa to be exact. Which is why we often call ourselves Skin Angels
                        <span className="block pt-5">SKIN1004 is also an award-winning hypoallergenic & natural skincare brand from Korea. Our main ingredient, CENTELLA ASIATICA, originating from the untouched nature of MADAGASCAR, is one of the worlds finest Centella.</span>
                    </p>
            </div>
                <Link href="/about-us" className="inline-flex px-3 py-2 text-sm font-medium text-center text-[#3f3422] bg-[#a8915f] rounded-lg w-fit">
                    Learn more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
        </div>
</div>

    )
}
export default function Hero() {
    return (
        <div className="min-h-screen max-w-full flex-col flex bg-[#ececec]">

        <div className=" h-screen mx-5 flex max-md:flex-col relative">

                        
            {/* Text Hero */}
            <div className="flex flex-col justify-center max-sm:ml-7 pl-10 w-[40%] max-md:w-fit h-screen">
                <h2 className="text-5xl max-md:text-4xl font-bold 
                bg-[url('https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Fnathan-dumlao-xjhgZCuvg3k-unsplash.jpg?alt=media&token=de3341d8-8461-42ea-8f08-8959616804f9')] 
                bg-cover bg-clip-text text-transparent">
                    Centella Asiatica
                </h2>

                {/* Video Hero */}
            <div className="flex justify-center items-center w-full -pr-10 my-7 md:hidden lg:hidden">
                <video autoPlay className="max-w-full h-auto rounded-3xl drop-shadow-lg border-r-2 border-b-2 border-black/10" controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Fbg-skin1004.webm?alt=media&token=f028a7ca-5081-42a6-a441-620be87bb633"
                type="video/mp4" />
                </video>
            </div>

                <h5 className="text-wrap text-[#3f3422] max-md:mr-10 ml-1 mt-3 text-justify">
                    <span className="font-bold tracking-[0.4em]">SKIN1004</span> is also an award-winning hypoallergenic & <span className="bg-white/50 text-[#a8915f] font-bold">natural skincare brand from Korea</span>. Our main ingredient, <span className="font-semibold italic">centella asiatica</span>, originating from the untouched nature of Madagascar, is one of the worlds finest Centella.
                </h5>
            </div>

            {/* Video Hero */}
            <div className="flex justify-center items-center w-[60%] max-md:hidden">
                <video autoPlay loop className="w-[70%] h-auto rounded-3xl drop-shadow-lg border-r-2 border-b-2 border-black/10" controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Fbg-skin1004.webm?alt=media&token=f028a7ca-5081-42a6-a441-620be87bb633"
                type="video/mp4" />
                </video>
            </div>
        </div>

        {/* waves */}
        <div className="absolute w-full z-10 bottom-[-18px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a8915f" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,213.3C480,235,600,213,720,213.3C840,213,960,235,1080,213.3C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>

        </div>
      )
}
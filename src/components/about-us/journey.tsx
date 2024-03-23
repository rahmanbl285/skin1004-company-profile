export default function Journey () {
    return (
        <div className="w-full h-auto bg-[#fbf9f7] p-10">
            <div className="flex flex-col gap-3">

                <div className="flex flex-col gap-2">
                    <h4 className="text-5xl font-bold text-[#a8915f]">OUR JOURNEY</h4>
                    <h6 className="text-md font-semibold bg-[#a8915f] text-[#fbf9f7] py-1 px-4 max-w-fit rounded-e-full mb-4">Whatever touches the skin must be pristine.</h6>
                </div>

                {/* Motivation */}
                <div className="flex max-sm:flex-col w-full">
                    <div className="flex items-center justify-center h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#d8d0c5]">
                        <h6 className="text-[#a8915f] text-xl font-bold break-words">MOTIVATION</h6>
                    </div>
                    <div className="flex items-center justify-center p-10 h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#a8915f] overflow-hidden">
                        <p className="text-justify text-[#d8d0c5] break-words overflow-hidden">
                            We believe that whatever touches the skin must be clean,
                            and with that, the ingredient is the utmost priority.

                            We want to find the best ingredient that can be suitable for everyone.
                            An ingredient that is mild and gentle so that everyone can use it everyday
                        </p>
                    </div>
                </div>

                {/* Exploration */}
                <div className="flex flex-row-reverse max-sm:flex-col max-sm:w-full w-full">
                    <div className="flex items-center justify-center h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#d8d0c5]">
                        <h6 className="text-[#a8915f] text-xl font-bold">EXPLORATION</h6>
                    </div>
                    <div className="flex items-center justify-center p-10 h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#a8915f] overflow-hidden">
                        <p className="text-justify text-[#d8d0c5] break-words overflow-hidden">
                            With the belief that good ingredients originate from clean nature,
                            we went on a long journey to find The Untouched Nature.
                        </p>
                    </div>
                </div>


                {/* Destination */}
                <div className="flex w-full max-sm:flex-col max-sm:w-full">
                    <div className="flex flex-col items-center justify-center h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#d8d0c5] overflow-hidden">
                        <h6 className="text-[#a8915f] text-xl font-bold break-words">DESTINATION</h6>
                        <p className="text-[#3f3422]/50 text-base font-semibold text-center break-words overflow-hidden">The Heart of Mother Nature</p>
                    </div>
                    <div className="flex items-center justify-center p-10 h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#a8915f]">
                        <p className="text-justify text-[#d8d0c5] break-words overflow-hidden">Through this journey,
                            we arrived in Madagascar, the oldest island on Earth,
                            where 1700 million years of
                            the most ancient and pristine nature has been preserved.</p>
                    </div>
                </div>

                {/* Discovery */}
                <div className="flex flex-row-reverse max-sm:flex-col max-sm:w-full w-full">
                    <div className="flex flex-col items-center justify-center h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#d8d0c5]">
                        <h6 className="text-[#a8915f] text-xl font-bold">DISCOVERY</h6>
                        <p className="text-[#3f3422]/50 text-base font-semibold text-center">Centella Asiatica, the leaf of life</p>
                    </div>
                    <div className="flex items-center justify-center p-10 h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#a8915f] overflow-hidden">
                        <p className="text-justify text-[#d8d0c5] break-words overflow-hidden">From the ancient wisdom of natives,
                            we found the healing and protecting leaf of life,
                            Centella Asiatica</p>
                    </div>
                </div>

                {/* The Purest Raw Ingredient */}
                <div className="flex w-full max-sm:flex-col max-sm:w-full">
                    <div className="flex flex-col items-center justify-center h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#d8d0c5] overflow-hidden">
                        <h6 className="text-[#a8915f] text-xl font-bold break-words uppercase text-center">The Purest Raw Ingredient</h6>
                        <p className="text-[#3f3422]/50 text-base font-semibold text-center break-words overflow-hidden">Centalla Asiatica of the highest quality is grown</p>
                    </div>
                    <div className="flex items-center justify-center p-10 h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#a8915f]">
                        <p className="text-justify text-[#d8d0c5] break-words overflow-hidden">in the fields of the untouched Madagascar.
                            The optimal environment for Centella farming
                            is annual average temperature of 23-27°C at the altitude of 700m.</p>
                    </div>
                </div>

                {/* In its Rawest Form */}
                <div className="flex flex-row-reverse max-sm:flex-col max-sm:w-full w-full">
                    <div className="flex items-center justify-center h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#d8d0c5]">
                        <h6 className="text-[#a8915f] text-xl font-bold uppercase text-center">In its Rawest Form</h6>
                    </div>
                    <div className="flex items-center justify-center p-10 h-auto lg:h-[200px] w-1/2 max-sm:w-full bg-[#a8915f] overflow-hidden">
                        <p className="text-justify text-[#d8d0c5] break-words overflow-hidden">By carefully selecting only the cleanest and purest Centella
                            to exclude any harmful ingredients as much as possisble,
                            we succeeded in collecting 100% pure centella extract.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
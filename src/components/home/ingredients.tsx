import Image from "next/legacy/image"

export default function Ingredient() {
    return (
        <div className="flex flex-col h-1/2 w-full bg-[#a8915f] justify-center items-center py-20 gap-10 max-sm:px-6">
        {/* text */}
            <div>
                <h3 className="text-xl text-center font-semibold text-[#ececec]">
                    We are proud to be a clean beauty brand and have acquired certifications to prove so, 
                    <span className="block">such as CGMP, Beauty without Bunnies, cruelty-free & vegan through PETA, etc.</span>
                </h3>
            </div>


        {/* icons */}
            <div className="grid grid-cols-4 gap-10">
                <Image src="https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Fcruelty-free.png?alt=media&token=9728f835-7ba4-4161-a26e-cd05802c928b" 
                alt="Cruelty Free"
                height={64}
                width={64}
                className="bg-transparent"
                 />
                <Image src="https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Fparaben-free.png?alt=media&token=f79b75c7-8282-4e0e-a3a4-0531dad58e9a" 
                alt="Paraben Free"
                height={64}
                width={64} 
                className="bg-transparent"
                />
                <Image src="https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Fplant-based.png?alt=media&token=b7863b4e-d28d-4a12-a92b-5c87897e5946" 
                alt="Natural Ingredients"
                height={64}
                width={64} 
                className="bg-transparent"
                />
                <Image src="https://firebasestorage.googleapis.com/v0/b/company-project-skin1004.appspot.com/o/video-skin1004%2Falcohol-free.png?alt=media&token=de23334a-cfe1-46e8-866a-c55610222889"
                alt="Alcohol Free"
                height={64}
                width={64} 
                className="bg-transparent"
                />
            </div>
        </div>

    )
}
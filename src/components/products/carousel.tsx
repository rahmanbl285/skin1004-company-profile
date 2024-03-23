import { Carousel } from "flowbite-react";
import Image from "next/legacy/image";

export default function CarouselProduct() {
    return (
        <div className="h-[400px] w-full">
            <Carousel slideInterval={5000}>
                <div className="w-full h-full relative ">
                    <Image
                        src={'https://skin1004.com/cdn/shop/files/1_main_pc3_1600x.jpg?v=1706850372'}
                        alt="image 2"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="w-full h-full relative ">
                    <Image
                        src={'https://skin1004.com/cdn/shop/files/2_main_pc4_1600x.jpg?v=1706850443'}
                        alt="image 2"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="w-full h-full relative ">
                    <Image
                        src={'https://skin1004.com/cdn/shop/files/3_main_pc2_1600x.jpg?v=1706850492'}
                        alt="image 2"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="w-full h-full relative ">
                    <Image
                        src={'https://skin1004.com/cdn/shop/files/4_main_pc1_1600x.jpg?v=1706850524'}
                        alt="image 2"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
            </Carousel>
      </div>
    )
}
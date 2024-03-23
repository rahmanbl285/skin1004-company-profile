import CarouselProduct from "@/components/products/carousel";
import TabsProduct from "@/components/products/tabs";

export default function Product() {
    return (
        <div>
            <CarouselProduct/>
            <div className="flex flex-col h-full w-full bg-[#ececec] p-6">
                <TabsProduct />
            </div>
        </div>
    )
}
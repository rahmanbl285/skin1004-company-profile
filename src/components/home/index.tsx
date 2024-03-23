import AboutUsHome from "./aboutUs";
import Ingredient from "./ingredients";
import ProductCard from "./productCard";
import TestimonialHome from "./testi";



export default function CompanyOverview() {
    return (
    <section id="ingredients" className="flex flex-col">

        {/* Card Product */}
        <div>
            <ProductCard />
        </div>

        <div>
            <AboutUsHome />
        </div>

        <div>
            <Ingredient />
        </div>

        {/* Testimonials */}
        <div className="bg-[#ececec] min-h-screen w-full flex justify-center items-center">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center my-10 text-center">
                    <p className="text-xs tracking-wide font-bold">TESTIMONIALS</p>
                    <h2 className="text-xl font-bold text-[#a8915f]">
                            What our customers are saying
                    </h2>
                </div>

                <div className="max-sm:mb-10">
                    <TestimonialHome />
                </div>
            </div>
        </div>

        <div>
    </div>

    </section>
    )
}
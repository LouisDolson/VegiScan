import React from "react";
import Diagnosis from "../../assets/image/diagnosis.svg";
import Recipe from "../../assets/image/recipe.svg";
import FoodWaste from "../../assets/image/foodwaste.svg";

const Serve = () => {
    return (
        <section className="bg-white mt-20">
            <div className="py-16 px-6 mx-auto max-w-screen-xl">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center mb-12 lg:text-left">
                    <div>
                        <h5 className="text-lg font-extrabold text-green-600 mb-2">
                            What We Serve?
                        </h5>
                        <h3 className="text-3xl font-extrabold text-textDark leading-snug">
                            Explore the Features <br />
                            That Make Us Unique
                        </h3>
                    </div>
                    <div>
                        <p className="text-gray-500 text-textDark leading-relaxed">
                            Discover how VegiScan stands out with intelligent features that simplify your
                            life, reduce waste, and deliver top-quality vegetables.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center justify-start mb-6">
                            <img
                                src={Diagnosis}
                                alt="Vegetable Quality"
                                className="w-16 h-16 md:w-20 md:h-20"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-textDark mb-2 text-left">
                            Vegetable Quality Diagnosis
                        </h3>
                        <p className="text-gray-600 text-left">
                            Analyze your vegetables' freshness and quality in seconds.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center justify-start mb-6">
                            <img
                                src={Recipe}
                                alt="Recipe Recommendations"
                                className="w-16 h-16 md:w-20 md:h-20"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-textDark mb-2 text-left">
                            Personalized Recipe Recommendations
                        </h3>
                        <p className="text-gray-600 text-left">
                            Discover recipes based on ingredients you already have.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center justify-start mb-6">
                            <img
                                src={FoodWaste}
                                alt="Reducing Food Waste"
                                className="w-16 h-16 md:w-20 md:h-20"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-textDark mb-2 text-left">
                            Reducing Food Waste
                        </h3>
                        <p className="text-gray-600 text-left">
                            Empower smarter choices to minimize food waste.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Serve;
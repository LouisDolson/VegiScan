import React from "react";
import HowItWorkImg from "../../assets/image/img-works.svg";
import IconOne from "../../assets/image/iconWork1.svg";
import IconTwo from "../../assets/image/iconWork2.svg";
import IconThree from "../../assets/image/iconWork3.svg";

const HowItWorks = () => {
  return (
    <section className="mx-auto px-6 md:px-12 mt-20 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HowItWorkImg}
          alt="Vegetable Image"
          className="rounded-lg max-w-full md:max-w-xl"
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-primary-400 font-medium text-lg mb-2">How It Works ?</p>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
          Smarter Veggie Care
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-start p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <img
                src={IconOne}
                alt="Icon"
                className="w-12 h-12"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg text-textDark">Scan your vegetables or crops</h3>
              <p className="text-textDark text-sm">
                Using VegiScan, scan your vegetables to automatically detect their quality and identify health issues.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <img
                src={IconTwo}
                alt="Icon"
                className="w-12 h-12"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg text-textDark">Diagnose Vegetable Quality</h3>
              <p className="text-textDark text-sm">
                Leverage AI-powered image classification to evaluate ripeness and freshness for optimal consumption.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <img
                src={IconThree}
                alt="Icon"
                className="w-12 h-12"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg text-textDark">Get Tailored Recipe Recommendations</h3>
              <p className="text-textDark text-sm">
                Receive personalized recipes based on the scanned vegetable's quality and available ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

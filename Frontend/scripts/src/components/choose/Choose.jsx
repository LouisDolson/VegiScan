import React from "react";
import ChooseImg from "../../assets/image/img-choose.svg";
import IconOne from "../../assets/image/iconChoose1.svg";
import IconTwo from "../../assets/image/iconChoose2.svg";
import IconThree from "../../assets/image/iconChoose3.svg";

const WhyChoose = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12 flex flex-col md:flex-row items-center gap-8 py-12">
  {/* Bagian Teks */}
  <div className="w-full md:w-1/2 order-2 md:order-1">
    <p className="text-primary-400 font-medium text-lg mb-2">
      Why Choose VegiScan
    </p>
    <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
      Fresher, Healthier, and Sustainable Vegetables
    </h2>

    <div className="flex flex-col gap-4">
      <div className="flex items-start p-4 rounded-lg hover:shadow-smooth">
        <div className="flex-shrink-0">
          <img src={IconOne} alt="Icon" className="w-12 h-12" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg textDark">
            Powered by advanced AI technology
          </h3>
          <p className="text-textDark text-sm">
            Provides farmers with early detection of crop issues, enabling
            timely intervention and better yield.
          </p>
        </div>
      </div>
      <div className="flex items-start p-4 rounded-lg hover:shadow-smooth">
        <div className="flex-shrink-0">
          <img src={IconTwo} alt="Icon" className="w-12 h-12" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg textDark">
            Smart Recipe Recommendations
          </h3>
          <p className="text-textDark text-sm">
            Connects vegetable diagnosis with tailored recipe suggestions, enhancing meal planning and reducing ingredient waste.
          </p>
        </div>
      </div>
      <div className="flex items-start p-4 rounded-lg hover:shadow-smooth">
        <div className="flex-shrink-0">
          <img src={IconThree} alt="Icon" className="w-12 h-12" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg textDark">
            Reduce Food Waste
          </h3>
          <p className="text-textDark text-sm">
            VegiScan empowers consumers with knowledge about vegetable freshness and ripeness, reducing unnecessary waste.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Bagian Gambar */}
  <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
    <img
      src={ChooseImg}
      alt="Vegetable Image"
      className="rounded-lg lg:max-w-lg md:max-w-lg"
    />
  </div>
</section>

  );
};

export default WhyChoose;



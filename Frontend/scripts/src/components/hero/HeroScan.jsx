import React, { useState } from "react";
import { Link } from "react-router-dom";

import ScanImage from "../../assets/image/scan.png";
import UploadPopup from "../scan/Upload.jsx";
import Vegetables from "../../Pages/VegetablesPage";
import DetailScan from "../scan/DetailScan.jsx";

const HeroScan = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [data, setData] = useState(null);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = (dataDetail) => {
    setIsPopupOpen(false);
    if(dataDetail){
      setData(dataDetail);
    }
    console.log(dataDetail);
  };

  return (
    <section className="bg-white">
      {data ? (<DetailScan image={data.link} name={data.label} onCloseTwo={() => setData(null)}/>) : (<><div className="max-w-screen-xl mx-auto grid py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 px-4 md:px-6">
            <div className="place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-2xl text-textDark font-extrabold eading-loose text-left md:text-5xl xl:text-5xl">
                Smart Scanning for Better Vegetable Quality and Insights
              </h1>
              <p className="max-w-2xl mb-6 text-textDark text-left lg:mb-8 md:text-lg lg:text-lg">
                Quickly scan your vegetables to assess their quality, identify <br /> potential issues, and receive customized tips for optimal use. <br /> Make smarter choices for freshness and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handlePopupOpen}
                  className="inline-flex px-10 py-3 text-white text-md font-bold text-center rounded-lg bg-primary-400 hover:bg-primary-500"
                >
                  Upload
                </button>
                <button
                  className="inline-flex px-10 py-3 text-white text-md font-bold text-center rounded-lg bg-secondary-500 hover:bg-secondary-600"
                >
                  <Link to="/history">History</Link>
                </button>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={ScanImage} alt="Hero image" />
            </div>
          </div>
          <UploadPopup isOpenTwo={isPopupOpen} onCloseTwo={handlePopupClose} /></>)}
          
    </section>
  );
};

export default HeroScan;

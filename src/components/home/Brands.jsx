import React from "react";
import '../home/Brands.css';

export default function Brands() {
    return (
        <div className="flex flex-col p-5 md:p-10">

            <div>
                <p className="font-bold text-center">BRANDS WE WORK WITH</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-3 sm:mt-5 font-bold text-center">Trusted by Thousands of Businesses</h1>
            </div>

            <div className="w-full mt-5 md:mt-10 flex justify-center items-center">
                <div className="grid pl-10  grid-cols-2 gap-5 md:grid-cols-3 items-center flex md:gap-8 border rounded-2xl ">
                    <img src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" className="m-3 sm:m-5 mx-auto " height={150} width={150} alt="" />
                    <img src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" className="m-3 sm:m-5 mx-auto" height={150} width={150} alt="" />
                    <img src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" className="m-3 sm:m-5 mx-auto" height={150} width={150} alt="" />
                    <img src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" className="m-3 sm:m-5 mx-auto" height={150} width={150} alt="" />
                    <img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" className="m-3 sm:m-5 mx-auto" height={150} width={150} alt="" />
                    <img src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" className="m-3 sm:m-5 mx-auto" height={150} width={150} alt="" />
                </div>
            </div>

        </div>
    );
}

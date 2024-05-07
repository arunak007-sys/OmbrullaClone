import React from "react";
import '../home/Home.css'
import NavBar from "./NavBar";
import { CgPlayButtonO } from "react-icons/cg";

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <div className="header1">
          <NavBar />
        </div>

        <div className="header2">
          <div className="leftHeader2">
            <div className="abcde">
              <p className="abcd1">Manual <br /> Inspection is</p>
              <p className="abcd2">Slow & Error-Prone</p>
            </div>
            <div>
              <p className="abcd3">AI-powered visual inspection, leveraging computer vision, transforms <br /> manufacturing inspection procedures, boosting precision and cost-effectiveness <br /> while upholding product excellence. This AI inspection system detects defects <br /> with exceptional accuracy, optimizing the overall inspection process.</p>
            </div>
            <div className="callIcons">
              <div>
                <button className="callBtn">Schedule Call</button>
              </div>

              <div className="btnIcons">
                <CgPlayButtonO className="playBtn" />
                <p className="watchV">Watch Video</p>
              </div>
            </div>
          </div>
          <div className="rightHeader2">
            <div className="image-container">
              <img
                src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
                alt="AI visual inspection"
                className="image-mask"
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="center1">
          <div className="centerIm1">

            <div className="centers1">
            <div className="center1First">
              <div className="flex md:items-baseline">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-10 md:w-2 md:h-2 dotIcons">
                  <path fill="#0000ff" fillRule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path>
                </svg>
                <div className="font-medium md:font-bold font-albert-sans text-5xl md:text-sm md:leading-4 ml-5 mb-3 md:ml-4 md:mb-2">
                  <h1 className="h1Leader">Leader in AI visual inspection</h1>
                </div>
              </div>
              </div>
              
              <div className="center1Second">
                <h2  className="text-8xl md:text-6xl font-medium mb-2 md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl" style={{ lineHeight: "1.3",textAlign:'left' }}>
                  Crafting Tomorrow's World with <span className="text-primary font-normal">AI Excellence</span>
                </h2>
              </div>

              <div className="center1Third">
              <p class="text-left text-6xl md:text-lg md:max-w-2xl 2xl:max-w-4xl leading-normal md:leading-relaxed text-gray-500 font-albert-sans xl:text-base mb-4 md:mb-0">
Leveraging AI, Ombrulla empowers clients with data-driven insights and
        automation, extracting valuable information from various sources like
        photos, videos, and data lakes. Our AI visual inspection system enables
        businesses to enhance their bottom line through precise defect detection
        and actionable insights.
</p>
              </div>

              <div className="center1Four">
              <div className="btnIcons" style={{textAlign:'left',justifyContent:'left'}}>
                <CgPlayButtonO className="playBtn" />
                <p className="watchV" style={{fontWeight:'bold'}}>Watch Corporate Video</p>
              </div>
              </div>
            </div>

          </div>
        </div>

        <div className="center2">

            <div className="center2F">
            <div style={{width:'400px'}} class="flex flex-col pt-0 gap-y-10 basis-1/3  "><div class="flex items-baseline"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg><div class="text-5xl md:text-sm md:leading-4 font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-4">
PRODUCTS
</div></div><div class=""><h3 class="text-8xl md:text-5xl font-sans leading-tight font-semibold text-left">
Tracking Tools </h3></div><div class="md:mb-0 mb-12"><p class="text-6xl leading-snug md:text-base md:leading-6 text-gray-500 text-left">
AI and IoT-enabled tracking tools enhance workplace safety  by providing real-time monitoring of workers' movements  and vital signs. Simultaneously, they contribute to  environmental sustainability by optimizing energy usage,  improving waste management, and promoting resource efficiency.
</p></div></div>
            </div>

    <div className="center2S">
    <div style={{width:'400px'}} class="flex flex-col gap-y-20 md:gap-y-5 bg-[#eff1f5] w-fit mx-10 md:mx-0 p-32 md:p-9 rounded-2xl "><div class="flow-root"><h4 class="font-medium font-albert-sans text-6xl md:text-2xl md:leading-8 lg:h-[60px] ">RTLS - Workplace Safety</h4></div><div><p class="text-6xl leading-snug md:text-base md:leading-7 text-gray-500  lg:h-[132px] ">IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations in real-time for proactive hazard detection.</p></div><div class="my-4 flex justify-center items-center"><img src="https://www.ombrulla.com/_astro/safetyr.6f7bac17_2OxpR.webp" alt="RTLS - Workplace Safety" class="w-[50%]" width="1080" height="1080" loading="lazy" decoding="async"/></div><div class="flex"><div><a href="https://calendly.com/anoop-ombrulla/30min?month=2023-11" target="_blank" class="text-5xl md:text-base font-medium">Book For Demo</a></div><div><svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg></div></div></div>
    </div>
    <div className="center2T">
    <div class="flex flex-col gap-y-20 md:gap-y-5 bg-[#eff1f5] w-fit mx-10 md:mx-0 p-32 md:p-9 rounded-2xl " style={{width:'400px'}}><div class="flow-root"><h4 class="font-medium font-albert-sans text-6xl md:text-2xl md:leading-8 lg:h-[60px] ">Environmental Sustainability</h4></div><div><p class="text-6xl leading-snug md:text-base md:leading-7 text-gray-500  lg:h-[132px] ">AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management, and promoting resource efficiency.</p></div><div class="my-4 flex justify-center items-center"><img src="https://www.ombrulla.com/_astro/envsafety.45f1043e_Z8wyMD.webp" alt="Environmental Sustainability" class="w-[50%]" width="1080" height="1080" loading="lazy" decoding="async"/></div><div class="flex"><div><a href="https://calendly.com/anoop-ombrulla/30min?month=2023-11" target="_blank" class="text-5xl md:text-base font-medium">Book For Demo</a></div><div><svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg></div></div></div>
    </div>
            
        </div>

      </div>
    </div>
  );
}

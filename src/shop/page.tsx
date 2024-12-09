import Image from "next/image";
import Navbar from "../components/navbar";

import CardText from "@/components/card";
export default function () {
  return (
    <div>
      <Navbar />
      {/* Shop Section */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[92px] py-[24px] flex flex-col items-center">
        <div className="w-[1049px] h-[44px] flex gap-[1000px] items-center py-[40px]">
          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <Image src="/images/Vector (13).png" alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* category */}
      <div className="w-[1440px] h-[271px] bg-[#FAFAFA]">
        <div className="w-[1088px] h-[271px] absolute top-[200px] left-[176px] pb-[48px]">
          <div className="w-[1088px] h-[223px] flex gap-[15px]">
            <Image src="/images/card-item.png" alt="1" />
            <Image src="@/images/card-item (1).png" alt="2" />
            <Image src="@/images/card-item (2).png" alt="3" />
            <Image src="/images/card-item (3).png" alt="4" />
            <Image src="/images/card-item (4).png" alt="5" />
          </div>
        </div>
      </div>
      {/* popularity */}
      <div className="w-[1440px] h-[98px] absolute justify-center top-[500px]">
        <div className="w-[1050px] h-[98px]  absolute left-[195px] py-[24px] flex gap-[80px]">
          <div className="w-[1040px] h-[50px] flex justify-between">
            <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
              Showing all 12 results
            </div>
          </div>
          <div className="w-[177px] h-[46px]  px-[1px] flex gap-[15px] justify-center">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
              Views:
            </h6>
            <Image src="/images/Frame 31.png" alt="frame" className="flex justify-center" />
          </div>
          <div className="w-[252px] px-[1px] flex  gap-[15px]">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD]">
              <p className=" font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
              <Image
                src="/images/Vector (14).png"
                alt="drop"
                className="absolute top-[10px] left-[10px]"
              />
            </button>
            <button className="w-[94px] h-[50px] px-[20px] py-[10px] flex gap-[10px] bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>
      {/* clients */}
      <Image src="images/desktop-clients-1.png" alt="clients" className="absolute top-[600px]" />
         
         {/* footer */}
         <footer className="bg-white absolute top-[800px] left-[100px]">
            {/* Top Section */}
            <section className="bg-[#ffffff] py-10">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
                    </div>
                    <div className="flex gap-6">
                        <Image src="/images/facebook.png" alt="fb" className="w-6 h-6 " />
                        <Image src="/images/ant-design_instagram-outlined.png" alt="fb" className="w-6 h-6 " />
                        <Image src="/images/ant-design_twitter-outlined.png" alt="fb" className="w-6 h-6 " />
                    </div>
                </div>
            </section>
  
            {/* Divider */}
            <div className="border-t border-[#e6e6e6]" />
  
            {/* Main Footer Content */}
            <section className="bg-white py-12">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
                        </nav>
                    </div>
  
                    {/* Legal */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
                        </nav>
                    </div>
  
                    {/* Features */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Features</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
                        </nav>
                    </div>
  
                    {/* Resources */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">API</a>
                        </nav>
                    </div>
  
                    {/* Get in Touch */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                        <div className="mt-3">
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                                    placeholder="Your Email"
                                />
                                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
  
            {/* Bottom Section */}
            <section className="bg-[#FAFAFA] py-4">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* Social icons or other footer links can go here */}
                    </div>
                </div>
            </section>
        </footer>
      <div className="w-[1440px] h-[1778px] relative">
        {/* Container for products */}
        <div className="w-[1124px] h-auto absolute top-[900px] left-[158px] py-[48px] gap-[48px]">
          <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {/* Product Cards */}
            {[
              "/images/product-cover-5 (8).png",
              "/images/product-cover-5 (9).png",
              "/images/product-cover-5 (10).png",
              "images/product-cover-5 (11).png",
              "/images/product-cover-5 (12).png",
              "/images/product-cover-5 (13).png",
              "/images/product-cover-5 (14).png",
              "/images/product-cover-5 (15).png",
              "/images/product-cover-5 (16).png",
              "/images/product-cover-5 (17).png",
              "/images/product-cover-5 (18).png",
              "/images/product-cover-5 (19).png",
            ].map((pic, index) => (
              <div key={index} className="w-[238px]  mx-auto mb-[30px]">
                <div className="w-full h-full flex flex-col items-center mb-[50px]">
                  <div className="w-[239px] h-[427px]">
                    <Image src={pic} alt={`picture${index + 9}`} />
                    <CardText />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* //Button */}
          <div
            className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] border-[#BDBDBD]"
            style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}
          >
            <div className="w-[313px] h-[74px]">
                <span className="w-[84px] border bg-[#F3F3F3] border-[#BDBDBD]">
                    <h2 className="w-[34px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">First</h2>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
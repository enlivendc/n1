import React from "react";
import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_01-5.jpg";
import Image3 from "../public/image_10-1.jpg";
import Image4 from "../public/image_10-2.jpg";
import Image5 from "../public/image_03-2.jpg";
const HomeContent = ({ homepageService,homePageContent }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
        {homepageService?.services.map((item) => (
          <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
            <img src={item?.serviceIcon?.sourceUrl} />
            <p className="text-2xl font-medium text-gray-600">
              {item.serviceTitle}
            </p>
            <p className="text-gray-600">{item.serviceDetails}</p>
          </div>
        ))}
      </div>
      <div className="container mx-auto py-24  space-y-20 w-full">
        <div className=" lg:flex lg:flex-row justify-center px-12">
          <div>
          { homePageContent?.image1?.sourceUrl &&
            <img src={homePageContent?.image1?.sourceUrl}  />
          } 
          </div>
          <div className="mt-12">
          { homePageContent?.image2?.sourceUrl &&
            <img src={homePageContent?.image2?.sourceUrl}  />
          } 
          </div>
        </div>
        <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
          <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
         
          <p
          className="text-3xl font-light text-gray-600"
          dangerouslySetInnerHTML={{ __html: homePageContent?.testimonial }}
        />
          <p className="text-xl text-gray-500">{homePageContent?.testimonialBy}</p>
        </div>
        <div className="lg:grid lg:grid-cols-2 px-12">
          <div className="col-span-1 space-y-6 py-12 text-center px-8">
            <p className="text-3xl font-medium text-gray-600">
            {homePageContent?.customerServiceTitle}
            </p>
            <p className="text-2xl font-light text-gray-500">
            {homePageContent?.customerServiceDescription}
            </p> 
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
          
            <div className="col-span-1 row-span-2">
              <img src={homePageContent?.servicesImage1?.sourceUrl}  />
            </div>
            <div className="col-span-1 row-span-1">
              <img src={homePageContent?.servicesImage2?.sourceUrl}  />
            </div>
            <div className="col-span-1 row-span-1">
              <img src={homePageContent?.servicesImage3?.sourceUrl}  />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
          <div className="text-center space-y-3 ">
            <p className="text-xl font-medium text-amber-600">WHAT WE OFFER</p>
            <p className="text-4xl font-light text-gray-600">
              See What We Can Do for You
            </p>
          </div>
          <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
          {homePageContent?.weOfferSection.map((item) => (
            <div  className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(${item?.offerImage?.sourceUrl})`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                {item?.offerTitle}
                </p>
              </div>
            </div> 
            ))}
             
          </div>
         
        </div>
      </div>
      <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-amber-600">WHY CHOOSE US</p>
        <p className="text-4xl font-light text-gray-600">
          Proudly Serving the Oakland Area Since 2007
        </p>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
    </div>X
    </React.Fragment>
  );
};

export default HomeContent;

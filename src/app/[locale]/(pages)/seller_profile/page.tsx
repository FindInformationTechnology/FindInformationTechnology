"use client";
import "@/app/[locale]/scss/globals.scss";
import "@/app/[locale]/scss/pages/sellerProfilePage.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import ProfileBg from "../../../../../public/seller_profile/profile-bg.png";
import ProfileImage from "../../../../../public/seller_profile/profile_image.jpg";
import LocationImage from "../../../../../public/seller_profile/location-map.png";
import { FaStar } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

// Components
import HomeBanner from "../../components/Sections/HomeBanner";
import { Col, Container, Row } from "react-bootstrap";
import AllProductsByThisSeller from "@/app/[locale]/components/Sections/AllProductsByThisSeller";

export default function SellerProfile() {
  const t = useTranslations("IndexPage");
  const pathname = usePathname();
  console.log("pathname", pathname);
  const ppl_reviews = [{}, {}, {}];

  return (
    <div className="min-h-screen relative m-0 p-0 w-full">
      <div className="profile-bg"></div>
      <div className="wrapper z-2 mt-[-5rem] w-full">
        <div className="first-row-wrapper flex items-center justify-between w-full">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="flex items-center justify-center rounded-full border-[5px] border-primary z-3"
              src={ProfileImage}
              width={160}
              height={160}
              alt="profile_image"
            />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between min-w-full">
              <div className="flex flex-col text-start items-center justify-center gap-2">
                <span className="font-semibold text-[23px]">
                  Bushra Aboubida
                </span>
                <div className="flex items-center justify-start gap-1 w-full">
                  <FaStar size={20} color="#FBBC05" />
                  <FaStar size={20} color="#FBBC05" />
                  <FaStar size={20} color="#FBBC05" />
                  <FaStar size={20} color="#FBBC05" />
                  <FaStar size={20} color="#FBBC05" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="primary-btn">Follow</div>
            <div className="primary-btn px-3">
              <IoShareSocialOutline size={24} color="#fff" />
            </div>
          </div>
        </div>

        <div className="sec-row mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3">
          <div className="about-seller flex-col">
            <b className="text-[20px] block mb-2">About Seller :</b>
            <span className="text-[16px] font-normal">
              Find Clothes is committed to providing each customer with the
              highest standard of customer service.
            </span>
            <div className="flex flex-wrap items-center gap-x-10 mt-2">
              <span className="text-[16px]">
                <b>Opened since:</b> December, 2020
              </span>
              <span className="text-[16px]">
                <b>Opened since:</b> December, 2020
              </span>
              <span className="text-[16px]">
                <b>Opened since:</b> December, 2020
              </span>
            </div>
          </div>
          <hr className="divider bg-slate-500 hidden md:block" />
          <div className="have-question-sec bg-[#F0F0F0] p-4 rounded-[10px] flex flex-col items-center justify-center gap-3">
            <b>Have any question for Find Clothes?</b>
            <div className="primary-btn">Ask a question</div>
            <span className="flex items-center gap-1 text-[14px]"><b>communicate by:</b><IoCallOutline size={18} />97100000000</span>
          </div>
        </div>

        <div className="third-row mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3">
          <div className="about-seller flex-col">
            <b className="text-[20px] block mb-4">Total for rating:</b>
            <div className="flex items-center gap-5">
              <div className="seller-rating-box flex flex-col items-center justify-center px-4 py-2 rounded-[10px] border-[.5px] border-[#EBEBEC]">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[14px]">Seller Rating</span>
                  <div className="flex items-center gap-1">
                    <CiStar size={24} />
                    <span className="text-[20px] font-bold">4.3</span>
                  </div>
                </div>
                <span className="text-[14px]">80% positive seller rating</span>
              </div>
              <div className="seller-rating-box flex flex-col items-center justify-center px-4 py-2 rounded-[10px] border-[.5px] border-[#EBEBEC]">
                <div className="flex items-center justify-between w-full ">
                  <span className="text-[14px]">Customer</span>
                    <span className="text-[20px] font-bold">2k</span>
                </div>
                <span className="text-[14px]">Within the last 30 days</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 mt-5">
              <div className="progress-bar-component flex flex-col items-start justify-start gap-1">
                <span className="text-[16px] font-medium">
                  Product as in description
                </span>
                <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                  {/* <span className="font-semibold text-[14px]">1</span> */}
                  <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                    <div
                      className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                      role="progressbar"
                      style={{
                        width: "50%",
                        backgroundColor: "#2C6FF4!important",
                      }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span className="font-semibold text-[14px]">60%</span>
                </div>
              </div>
              <div className="progress-bar-component flex flex-col items-start justify-start gap-1">
                <span className="text-[16px] font-medium">
                  Available in stock
                </span>
                <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                  {/* <span className="font-semibold text-[14px]">1</span> */}
                  <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                    <div
                      className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                      role="progressbar"
                      style={{
                        width: "30%",
                        backgroundColor: "#2C6FF4!important",
                      }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span className="font-semibold text-[14px]">30%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="location-sec rounded-[10px] flex flex-col gap-2">
            <b className="text-[20px] block mb-2">Location:</b>
            <Image
              src={LocationImage}
              width={491}
              height={190}
              alt="LocationImage"
            />
            <span className="text-[14px] flex items-center"><SlLocationPin className="mx-2"  />26, Al Sarai Street, Khalifa City, Abu Dhabi 23251</span>
          </div>
        </div>

        <div className="fourth-row gap-x-[10rem] mt-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3">
          <div className="left-side flex-col items-start gap-3 w-full">
            <span className="text-[18px] font-semibold">
              {" "}
              Reviews{" "}
              <span className="bg-[#A1A1AA] text-white px-[.5rem] font-light text-[12px] rounded-[15px] mx-2">
                157
              </span>{" "}
            </span>
            <div className="mt-10 flex-col items-start">
              <span className="text-[48px] font-semibold">4.5</span>
              <div className="flex items-center justify-start gap-1 w-full mt-1 mb-2">
                <FaStar size={16} color="#FBBC05" />
                <FaStar size={16} color="#FBBC05" />
                <FaStar size={16} color="#FBBC05" />
                <FaStar size={16} color="#FBBC05" />
                <FaStar size={16} color="#FBBC05" />
              </div>
              <span className="text-[18px] text-[#8C8C8C]">2,256,896</span>
            </div>
            <div className="flex flex-col w-full gap-2 mt-6 max-w-[50%]">
              <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                <span className="font-semibold text-[14px]">5</span>
                <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                  <div
                    className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                    role="progressbar"
                    style={{
                      width: "90%",
                      backgroundColor: "#2C6FF4!important",
                    }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                <span className="font-semibold text-[14px]">4</span>
                <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                  <div
                    className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                    role="progressbar"
                    style={{
                      width: "80%",
                      backgroundColor: "#2C6FF4!important",
                    }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                <span className="font-semibold text-[14px]">3</span>
                <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                  <div
                    className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                    role="progressbar"
                    style={{
                      width: "60%",
                      backgroundColor: "#2C6FF4!important",
                    }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                <span className="font-semibold text-[14px]">2</span>
                <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                  <div
                    className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                    role="progressbar"
                    style={{
                      width: "20%",
                      backgroundColor: "#2C6FF4!important",
                    }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div className="progress-bar-wrapper flex items-center gap-3 w-full">
                <span className="font-semibold text-[14px]">1</span>
                <div className="progress bg-[#2C6FF4] rounded-[10px] max-h-[7px] min-h-[7px] w-full">
                  <div
                    className="progress-bar rounded-[10px] bg-[#2C6FF4]"
                    role="progressbar"
                    style={{
                      width: "5%",
                      backgroundColor: "#2C6FF4!important",
                    }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side flex-col items-start justify-start min-w-[50%] max-w-[50%]">
            {ppl_reviews &&
              ppl_reviews.map((item, index) => (
                <div
                  key={index}
                  className="review-person-card flex-col items-start justify-start py-3 border-b-[.5px] border-[#e9e9e9] min-w-full max-w-full"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center gap-2 font-light">
                      <Image
                        src={ProfileImage}
                        width={32}
                        height={32}
                        className=" rounded-full min-w-fit"
                        alt="img"
                      />
                      <span className="text-[16px] font-medium min-w-fit">
                        BushraAboubida
                      </span>
                    </div>
                    <span className="text-[14px] text-[#3F3F3F] font-medium">
                      14-4-2024|03:30PM
                    </span>
                    <div className="flex items-center gap-1">
                      <FaStar size={16} color="#FBBC05" />
                      <FaStar size={16} color="#FBBC05" />
                      <FaStar size={16} color="#FBBC05" />
                      <FaStar size={16} color="#FBBC05" />
                      <CiStar size={16} color="#8C8C8C" />
                    </div>
                  </div>
                  <span className="text-[14px] font-normal">
                    I received only bottoms and cant return it
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="fith-row mt-10">
          <AllProductsByThisSeller />
        </div>
      </div>
    </div>
  );
}

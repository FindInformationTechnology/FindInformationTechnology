"use client";
// import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { DefaultSeo } from "next-seo";
import Image from "next/image";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import "@/app/[locale]/scss/globals.scss";
import Logo from "../../../../../public/login/logo-shape.png";
import LogoFacebook from "../../../../../public/login/facebook.png";
import LogoGoogle from "../../../../../public/login/google.png";
import LogoApple from "../../../../../public/login/apple.png";
import { IoCloseOutline } from "react-icons/io5";

// import AdvertisementFourFull from "../../../public/advertisement/advertisement-four-full.png";
// import AdvertisementFourFullMobile from "../../../public/advertisement/air-pods-pro-addvertisment.png";

// Components
import HomeBanner from "../../components/Sections/HomeBanner";
import StoriesSection from "../../components/Sections/StoriesSection";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import BrowseByCategorySection from "./components/Sections/BrowseByCategorySection";
// import DealsOfTheDay from "./components/Sections/DealsOfTheDay";
// import AdvertisementOne from "./components/Sections/AdvertisementOne";
// import AdvertisementTwo from "./components/Sections/AdvertisementTwo";
// import AdvertisementThree from "./components/Sections/AdvertisementThree";
// import OffersSection from "./components/Sections/OffersSection";
// import BestSellingSection from "./components/Sections/BestSellingSection";
// import RecentArriveSection from "./components/Sections/RecentArriveSection";
// import BestSellersOfTheWeek from "./components/Sections/BestSellersOfTheWeek";
// import PopularityCounterSection from "./components/Sections/PopularityCounterSection";

export default function Login() {
  // const t = useTranslations('IndexPage');
  // const pathname = usePathname();
  // console.log('pathname', pathname);
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userSettingHisPassword, setUserSettingHisPassword] = useState(false);
  const [validOTP, setValidOTP] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleLoginSignup = () => setIsLogin(!isLogin);
  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <HomeBanner />
      <StoriesSection />
      <div className="z-50 fixed top-0 left-0 bg-[#0a16347f] flex items-center justify-center min-w-full max-w-full min-h-screen">
        <div className="relative min-h-[60vh] min-w-full xs:max-w-[80vw] xs:min-w-[80vw] sm:max-w-[80vw] sm:min-w-[80vw]  md:max-w-[60vw] md:min-w-[60vw] xl:max-w-[30vw] lg:max-w-[30vw] lg:min-w-[30vw] rounded-xl flex flex-col items-center justify-center bg-white">
          <div className="absolute top-[-40px] bg-white p-3 rounded-full">
            <Image src={Logo} width={42} height={42} alt="logo" />
          </div>
          <IoCloseOutline
            className="absolute right-3 top-3 cursor-pointer"
            size={24}
            onClick={() => handleClose()}
          />

          <div className="flex flex-col items-center justify-center gap-0 mx-auto w-full max-w-full px-4 mt-5">
            <div className="login-bg-section max-w-[90%] bg-[#E8E9EB] p-1 rounded-[16px] flex items-center justify-center gap-2 cursor-pointer w-full">
              <div
                onClick={() => toggleLoginSignup()}
                className={`${
                  isLogin ? "bg-primary text-white" : "bg-[#E8E9EB] text-black"
                }  font-medium text-center flex items-center justify-center w-full h-[48px] rounded-[16px]`}
                style={{ borderRadius: "16px !important" }}
              >
                LogIn
              </div>
              <div
                onClick={() => toggleLoginSignup()}
                className={`${
                  !isLogin ? "bg-primary text-white" : "bg-[#E8E9EB] text-black"
                }  font-medium text-center flex items-center justify-center w-full h-[48px] rounded-[16px]`}
                style={{ borderRadius: "16px !important" }}
              >
                SignIn
              </div>
            </div>

            {isLogin ? (
              <div className="login-container flex flex-col items-center gap-3 mt-10 w-full">
                {/* if user didn't inter his email */}
                {/* after user inter his email = password and password config */}
                {!userSettingHisPassword ? (
                  <>
                    <input
                      type="email"
                      className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] lg:max-w-[360px] text-[#8C8C8C] rounder-[8px] mt-0 max-h-[3rem]"
                      style={{ borderRadius: "8px !important" }}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Mobile number"
                    />
                    <div
                      className="primary-btn uppercase max-w-fit my-3"
                      onClick={() => {
                        setUserSettingHisPassword(!userSettingHisPassword);
                      }}
                    >
                      Continue
                    </div>
                  </>
                ) : !validOTP ? (
                  <>
                    <div className="flex flex-col items-center justify-center gap-0">
                      <span className="font-semibold text-[16px] mb-2">
                        Verify your email
                      </span>
                      <span className="text-[14px] text-secondary font-light">
                        OTP has been sent to
                      </span>
                      <span className="text-[14px] text-secondary font-light">
                        karimshebo15@gmail.com
                      </span>
                      <div class="otp-field my-3">
                        <input
                          type="text"
                          maxLength={1}
                          typeof="number"
                          max={1}
                          min={1}
                          minLength={1}
                        />
                        <input
                          type="text"
                          maxLength={1}
                          typeof="number"
                          max={1}
                          min={1}
                          minLength={1}
                        />
                        <input
                          type="text"
                          maxLength={1}
                          typeof="number"
                          max={1}
                          min={1}
                          minLength={1}
                        />
                        <input
                          type="text"
                          maxLength={1}
                          typeof="number"
                          max={1}
                          min={1}
                          minLength={1}
                        />
                        <input
                          type="text"
                          maxLength={1}
                          typeof="number"
                          max={1}
                          min={1}
                          minLength={1}
                        />
                        <input
                          type="text"
                          maxLength={1}
                          typeof="number"
                          max={1}
                          min={1}
                          minLength={1}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] text-secondary font-light">
                          0:20
                        </span>
                        <span className="text-[14px] text-secondary font-light">
                          Resend OTP
                        </span>
                      </div>
                    </div>
                    <div
                      className="primary-btn uppercase max-w-fit"
                      onClick={() => {
                        setValidOTP(!validOTP);
                      }}
                    >
                      Login
                    </div>
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-[16px] text-center">
                      Set the new password
                    </span>
                    <input
                      type="password"
                      className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] lg:max-w-[360px] text-[#8C8C8C] rounder-[8px] mt-3 mb-0 max-h-[3rem]"
                      style={{ borderRadius: "8px !important" }}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Please enter your password"
                    />
                    <input
                      type="password"
                      className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] lg:max-w-[360px] text-[#8C8C8C] rounder-[8px] mt-0 max-h-[3rem]"
                      style={{ borderRadius: "8px !important" }}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Confirm password"
                    />
                    <div
                      className="primary-btn uppercase max-w-fit my-3"
                      onClick={() => {
                        setValidOTP(!validOTP);
                      }}
                    >
                      Save Change
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="signin-container flex flex-col items-center gap-0 mt-10 w-full">
                <input
                  type="email"
                  className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] text-[#8C8C8C] rounder-[8px] mt-0 max-h-[3rem]"
                  style={{ borderRadius: "8px !important" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] text-[#8C8C8C] rounder-[8px] mt-2 max-h-[3rem]"
                  style={{ borderRadius: "8px !important" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                <input
                  type="email"
                  className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] text-[#8C8C8C] rounder-[8px] mt-2 max-h-[3rem]"
                  style={{ borderRadius: "8px !important" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Mobile Number"
                />
                <input
                  type="email"
                  className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] text-[#8C8C8C] rounder-[8px] mt-2 max-h-[3rem]"
                  style={{ borderRadius: "8px !important" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                />
                <input
                  type="email"
                  className="form-control py-3 text[16px] font-light min-w-full lg:min-w-[360px] text-[#8C8C8C] rounder-[8px] mt-2 max-h-[3rem]"
                  style={{ borderRadius: "8px !important" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Confirm Password"
                />
                <div className="primary-btn uppercase max-w-fit mt-4">
                  Sing Up
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center min-w-full max-w-full gap-4 mt-3">
            <hr className="h-[.5px] w-[42%] bg-black" />
            <span className="">OR</span>
            <hr className="h-[.5px]  w-[42%] bg-black" />
          </div>

          {/* Social media */}
          <div className="flex items-center justify-between max-w-[70%] gap-4 mx-auto my-3">
            <Image src={LogoFacebook} width={25} height={25} alt="icon" />
            <Image src={LogoGoogle} width={25} height={25} alt="icon" />
            <Image src={LogoApple} width={25} height={25} alt="icon" />
          </div>
        </div>
      </div>
    </main>
  );
}

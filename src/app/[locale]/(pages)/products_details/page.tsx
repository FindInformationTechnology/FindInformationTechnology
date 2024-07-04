"use client";
import "@/app/[locale]/scss/globals.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import FavoriteIcon from "../../../../../public/product-details/favorite-icon.svg";
import HappyFaceIcon from "../../../../../public/product-details/happy-face-icon.svg";
import Iphone13ProBigProductImg from "../../../../../public/product-details/iphone-13-pro-big-product-img.png";
import Iphone13ProSmallProductImg1 from "../../../../../public/product-details/iphone-13-pro-small-product-img-1.png";
import Iphone13ProSmallProductImg2 from "../../../../../public/product-details/iphone-13-pro-small-product-img-2.png";
import Iphone13ProSmallProductImg3 from "../../../../../public/product-details/iphone-13-pro-small-product-img-3.png";
import Iphone13ProSmallProductImg4 from "../../../../../public/product-details/iphone-13-pro-small-product-img-4.png";
import Save10PercentIcon from "../../../../../public/product-details/save-10-percent-icon.svg";
import ShoppingCardSmallIcon from "../../../../../public/product-details/shopping-card-small-icon.png";
import ShoppingCartBtnIcon from "../../../../../public/product-details/shopping-cart-btn-icon.svg";
import SoldByIcon from "../../../../../public/product-details/sold-by-icon.svg";
import TabbyLogo from "../../../../../public/product-details/tabby-logo.png";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import ProfileImage from "../../../../../public/seller_profile/profile_image.jpg";

// Components

export default function ProductsDetails() {
  const t = useTranslations("ProductsPage");
  const pathname = usePathname();
  console.log("pathname", pathname);

  const [isHovered, setIsHovered] = useState(false);
  const [favoritesToggler, setFavoritesToggler] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const ppl_reviews = [{}, {}, {}];

  return (
    <Container className="wrapper min-h-screen relative m-0 min-w-full max-w-full bg-[#FAFAFB]">
      <Row className="m-0 p-0">
        <Breadcrumb className="top-quick-nav pt-5 pb-3">
          <Breadcrumb.Item href={`${pathname.slice(0, 3)}/`}>
            <span
              className="text-[#8C8C8C]"
              style={{ color: "#8C8C8C !important" }}
            >
              Home
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`${pathname.slice(0, 3)}/products`}>
            <span
              className="text-[#8C8C8C]"
              style={{ color: "#8C8C8C !important" }}
            >
              Electronics & Mobile
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <span
              className="text-[#8C8C8C]"
              style={{ color: "#8C8C8C !important" }}
            >
              smartphone
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>

      <Row className="m-0 p-0">
        <Col className="pro-img-col m-0 p-0" xs={12} sm={12} md={4} lg={4}>
          <div className="product-image-container w-full h-full flex items-start justify-start gap-3">
            <div className="small-product-images flex flex-col items-start justify-between max-h-[464px] gap-2">
              <Image
                src={Iphone13ProSmallProductImg1}
                width={85}
                height={100}
                alt="product-image"
              />
              <Image
                src={Iphone13ProSmallProductImg2}
                width={85}
                height={100}
                alt="product-image"
              />
              <Image
                src={Iphone13ProSmallProductImg3}
                width={85}
                height={100}
                alt="product-image"
              />
              <Image
                src={Iphone13ProSmallProductImg4}
                width={85}
                height={100}
                alt="product-image"
              />
            </div>
            <Image
              src={Iphone13ProBigProductImg}
              width={390}
              height={464}
              alt="product-image"
              className={`big-product-image ${
                isHovered
                  ? "zoomedImage image-width-and-height-and-transition"
                  : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </Col>
        <Col className="m-0 p-0" xs={12} sm={12} md={8} lg={8}>
          <div className="product-details-container w-full h-full flex flex-col items-start justify-start gap-2 pl-10">
            <span className="text-fight font-medium text-[16px]">Apple</span>
            <span className="font-semibold text-[32px] max-w-[70%] leading-10">
              iPhone 15 Pro Max 256GB Natural Titanium 5G With FaceTime - Middle
              East
            </span>
            <span className="text-fight text-[16px] max-w-[70%] mt-2">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos
              lobortis...
            </span>
            <div className="price-section-row flex items-end justify-between w-full min-w-full max-w-full ">
              <div className="text-start flex flex-col items-start gap-2 mt-2">
                <span className="text-[14px] font-semibold">
                  Model Number : iPhone 15 Pro Max
                </span>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-start gap-1">
                    <FaStar size={14} color="#FECE23" />
                    <FaStar size={14} color="#FECE23" />
                    <FaStar size={14} color="#FECE23" />
                    <FaStar size={14} color="#FECE23" />
                    <FaStar size={14} color="#FECE23" />
                  </div>
                  <span className="text-fight text-[14px] font-medium">
                    157 Reviews
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className="text-[28px] font-bold">AED 250.00</span>
                  <span className="text-[18px] font-normal line-through text-fight">
                    AED 350.00
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Image
                    src={Save10PercentIcon}
                    width={24}
                    height={24}
                    alt="save"
                  />
                  <span className="text-[16px] font-normal">Save</span>
                  <span className="text-[16px] font-bold text-[#E8083E]">
                    10% OFF
                  </span>
                </div>
              </div>
              <div className="sold-by-review-box border-[.5px] border-[#E4E4E5] rounded-[10px] flex flex-col items-start justify-start min-w-fit py-3 px-4 gap-3">
                <div className="flex items-center gap-1">
                  <Image src={SoldByIcon} width={24} height={24} alt="icon" />
                  <span className="text-[14px] font-normal flex items-center w-fit">
                    sold by{" "}
                    <span className="text-[#FFAA3F] underline mx-1">
                      Find _tech
                    </span>
                    <IoIosArrowForward size={14} className="" />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src={HappyFaceIcon}
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <span className="text-[14px] font-normal flex items-center w-fit">
                    94% Rating
                    <IoIosArrowForward size={14} className="mx-2" />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src={ShoppingCardSmallIcon}
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <span className="text-[14px] font-normal flex items-center w-fit">
                    Partner since{" "}
                    <span className="text-[#FFAA3F] underline mx-1">
                      5+Years{" "}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="product-specification-row p-3 mt-3 border-[.5px] border-[#E4E4E5] rounded-[10px] flex flex-col items-start justify-start min-w-full max-w-full">
              <div className="de-row flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-semibold">Quantity</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-semibold">Color</span>
                  <div className="flex items-center gap-2">
                    <div className="flex w-[36px] h-[36px] rounded-full bg-[#5399D1] border-[.5px] border-[#8C8C8C]"></div>
                    <div className="flex w-[36px] h-[36px] rounded-full bg-[#E5DDEA] border-[.5px] border-[#8C8C8C]"></div>
                    <div className="flex w-[36px] h-[36px] rounded-full bg-[#FDF493] border-[.5px] border-[#8C8C8C]"></div>
                    <div className="flex w-[36px] h-[36px] rounded-full bg-[#30373F] border-[.5px] border-[#8C8C8C]"></div>
                    <div className="flex w-[36px] h-[36px] rounded-full bg-[#FB0F2E] border-[.5px] border-[#8C8C8C]"></div>
                  </div>
                </div>
              </div>
              <div className="de-row flex justify-between items-center w-full mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-semibold">Memory</span>
                  <div className="flex flex-wrap items-center gap-2 max-w-[50%]">
                    <div className="flex bg-transparent border-[.5px] border-[#8C8C8C] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      256 GB
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      256 GB
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      256 GB
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      256 GB
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      256 GB
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      256 GB
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-semibold">version</span>
                  <div className="flex flex-wrap items-center gap-2 max-w-[50%]">
                    <div className="flex bg-transparent border-[.5px] border-[#8C8C8C] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      International Version
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      USA Version
                    </div>
                    <div className="flex bg-[#E8E8E8] text-center justify-center items-center text-[14px] py-1 px-2 font-medium rounded-md  ">
                      Middel East Version
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-1 w-full" />
              <div className="flex items-center justify-start w-full">
                <Image
                  src={TabbyLogo}
                  width={95}
                  height={95}
                  alt="tabby-logo"
                />
                <span className="text-[16px] font-semibold">
                  Pay 6 monthly payments of AED 12,890.00
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 w-full">
              <div className="add-to-cart-btn cursor-pointer bg-[#2C6FF4] rounded-[10px] p-3 text-center gap-2 flex items-center justify-center min-w-[90%] max-w-[90%]">
                <span className="text-[16px] font-bold text-white">
                  Add to cart
                </span>
                <Image
                  src={ShoppingCartBtnIcon}
                  width={24}
                  height={24}
                  alt="icon"
                />
              </div>
              <div className="add-to-cart-btn cursor-pointer bg-[#F0F0F0] rounded-[10px] p-3 text-center flex items-center justify-center min-w-[10%] max-w-[10%]">
                {favoritesToggler ? (
                  // <Image
                  //   src={FavoriteIcon}
                  //   width={24}
                  //   height={24}
                  //   alt="icon"
                  //   onClick={(e) => { setFavoritesToggler(!favoritesToggler); }}
                  //   />
                  <MdOutlineFavorite
                    size={24}
                    color="#F1352B"
                    onClick={(e) => {
                      setFavoritesToggler(!favoritesToggler);
                    }}
                  />
                ) : (
                  <GrFavorite
                    size={24}
                    color="#000"
                    onClick={(e) => {
                      setFavoritesToggler(!favoritesToggler);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="m-0 p-0 my-5 items-start justify-between pb-5">
        <Col xs={12} sm={12} md={12} lg={12} className="m-0 p-0">
          <Tabs activeKey={activeTab} onSelect={(key: string | null) => {
              if (key) {
                setActiveTab(key);
              }
            }}>
            <Tab eventKey="overview" title="Overview">
              <div className="flex items-start w-full gap-3  pt-10">
              <div className="flex flex-col">
                <span className="font-semibold text-[20px]">Highlights</span>
                <span className="text-[16px] mb-2 mt-4">
                  13-inch Liquid Retina display with True Tone
                  <ul className="m-0 mt-2 gap-2 flex flex-col list-disc">
                    <li className="text-[14px] font-normal">
                      A touch on the sensor instantly unlocks your Mac, and a
                      press locks it.
                    </li>
                    <li className="text-[14px] font-normal">
                      Use your fingerprint to rent movies, buy apps or access
                      things like locked documents or system settings without
                      having to re-enter your password Ultra‑high bandwidth
                      meets ultra‑versatility
                    </li>
                    <li className="text-[14px] font-normal">
                      Thunderbolt enables data transfer, charging and video
                      output all through a single port and MacBook Pro has two
                      of them Shortcuts to success.
                    </li>
                    <li className="text-[14px] font-normal">
                      Do all kinds of things quicker with handy shortcuts and
                      features — like your favorite emoji, preferred languages
                      and easier access to Sari Magic Keyboard delivers a
                      comfortable, quiet and responsive typing experience.
                    </li>
                    <li className="text-[14px] font-normal">
                      The Touch Bar puts the commands you need most right where
                      you need them, saving time and keystrokes
                    </li>
                    <li className="text-[14px] font-normal">
                      Do all kinds of things quicker with handy shortcuts and
                      features — like your favorite emoji, preferred languages
                      and easier access to Sari Magic Keyboard delivers a
                      comfortable, quiet and responsive typing experience.
                    </li>
                    <li className="text-[14px] font-normal">
                      The Touch Bar puts the commands you need most right where
                      you need them, saving time and keystrokes
                    </li>
                    <li className="text-[14px] font-normal">
                      Do all kinds of things quicker with handy shortcuts and
                      features — like your favorite emoji, preferred languages
                      and easier access to Sari Magic Keyboard delivers a
                      comfortable, quiet and responsive typing experience.
                    </li>
                    <li className="text-[14px] font-normal">
                      The Touch Bar puts the commands you need most right where
                      you need them, saving time and keystrokes
                    </li>
                  </ul>
                </span>
              </div>
              <div className="items-end justify-end w-full">
                <span className="font-semibold text-[20px]">
                  Specifications
                </span>
                <div className="text-[14px] flex flex-col items-start justify-start mt-3">
                  <div className="flex items-center justify-around w-full bg-[#E8E8E8] py-3 p rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Operating System Version
                    </span>
                    <span className="text-[14px] text-start">Type-C</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#fff] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Display Resolution Type
                    </span>
                    <span className="text-[14px] text-start">Dual SIM</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#E8E8E8] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Operating System Version
                    </span>
                    <span className="text-[14px] text-start">Type-C</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#fff] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Display Resolution Type
                    </span>
                    <span className="text-[14px] text-start">Dual SIM</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#E8E8E8] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Operating System Version
                    </span>
                    <span className="text-[14px] text-start">Type-C</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#fff] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Display Resolution Type
                    </span>
                    <span className="text-[14px] text-start">Dual SIM</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#E8E8E8] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Operating System Version
                    </span>
                    <span className="text-[14px] text-start">Type-C</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#fff] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Display Resolution Type
                    </span>
                    <span className="text-[14px] text-start">Dual SIM</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#E8E8E8] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Operating System Version
                    </span>
                    <span className="text-[14px] text-start">Type-C</span>
                  </div>
                  <div className="flex items-center justify-around w-full bg-[#fff] py-3 rounded-[8px]">
                    <span className="text-[14px] text-start">
                      Display Resolution Type
                    </span>
                    <span className="text-[14px] text-start">Dual SIM</span>
                  </div>
                </div>
              </div>
              </div>
            </Tab>
            <Tab eventKey="Reviews" title={`Reviews (${177})`}>
              <div className="flex flex-col pt-10">
                <span className="font-semibold text-[20px]">Reviews</span>
                <div className="fourth-row gap-x-[10rem] mt-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3">
                  <div className="left-side flex-col items-start gap-3 w-full">
                    <div className="mt-10 flex-col items-start">
                      <span className="text-[48px] font-semibold">4.5</span>
                      <div className="flex items-center justify-start gap-1 w-full mt-1 mb-2">
                        <FaStar size={16} color="#FBBC05" />
                        <FaStar size={16} color="#FBBC05" />
                        <FaStar size={16} color="#FBBC05" />
                        <FaStar size={16} color="#FBBC05" />
                        <FaStar size={16} color="#FBBC05" />
                      </div>
                      <span className="text-[18px] text-[#8C8C8C]">
                        2,256,896
                      </span>
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

                  <div className="right-side flex-col items-start justify-start w-full">
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
              </div>
            </Tab>
            <Tab eventKey="Offers" title="Offers">
              <div className="flex flex-col pt-10 gap-y-10">
                <span className="font-semibold text-[20px]">
                  Frequently Bought Together
                </span>
                <div className="flex items-center justify-between max-w-full gap-3 mt-5">
                  <div className="offer-small-card flex flex-col items-center justify-center max-w-[30%] text-center bg-white p-2 rounded-[10px]">
                    <Image
                      src={Iphone13ProSmallProductImg1}
                      width={130}
                      height={120}
                      alt="pro"
                    />
                    <span className="text-[14px] max-w-70% mt-3">
                      AirPods (3rd generation) with MagSafe Charging Case White
                    </span>
                    <span className="text-[14px] font-bold my-2">400AED</span>
                  </div>
                  <AiOutlinePlus size={40} color="#0F172A" />
                  <div className="offer-small-card flex flex-col items-center justify-center max-w-[30%] text-center bg-white p-2 rounded-[10px]">
                    <Image
                      src={Iphone13ProSmallProductImg1}
                      width={130}
                      height={120}
                      alt="pro"
                    />
                    <span className="text-[14px] max-w-70% mt-3">
                      AirPods (3rd generation) with MagSafe Charging Case White
                    </span>
                    <span className="text-[14px] font-bold my-2">400AED</span>
                  </div>
                  <AiOutlinePlus size={40} color="#0F172A" />
                  <div className="offer-small-card flex flex-col items-center justify-center max-w-[30%] text-center bg-white p-2 rounded-[10px]">
                    <Image
                      src={Iphone13ProSmallProductImg1}
                      width={130}
                      height={120}
                      alt="pro"
                    />
                    <span className="text-[14px] max-w-70% mt-3">
                      AirPods (3rd generation) with MagSafe Charging Case White
                    </span>
                    <span className="text-[14px] font-bold my-2">400AED</span>
                  </div>
                </div>
                <div className="primary-btn max-w-[30%] mx-auto">Buy 4 to gether for aed 1600.00</div>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      {/* <div className="text-[14px] text-light underline mx-auto w-full text-black">View  Full Overview</div> */}
    </Container>
  );
}

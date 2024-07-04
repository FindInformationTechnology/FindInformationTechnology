"use client";
import "@/app/[locale]/scss/globals.scss";
import "@/app/[locale]/scss/pages/myAccount.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Tabs } from "react-bootstrap";

// Assets
import ProfileIcon from "../../../../../public/my_account/user-profile-black.svg";
import CreditIcon from "../../../../../public/my_account/Credit card, Check, Done.svg";
import InvoiceIcon from "../../../../../public/my_account/Invoice, Accounting, Check mark.svg";
import BookmarksIcon from "../../../../../public/my_account/bookmark-favorite-add.svg";
import PremiumIcon from "../../../../../public/my_account/material-symbols-light_workspace-premium-rounded.svg";
import PinIcon from "../../../../../public/my_account/pin-sign.svg";
import ReturnsIcon from "../../../../../public/my_account/rotate-refresh-loading.2.svg";
import WalletIcon from "../../../../../public/my_account/wallet-2.svg";
import Iphone11 from "../../../../../public/products/iphone-11-product.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  IoMdArrowBack,
  IoMdArrowDropdown,
  IoMdArrowRoundBack,
} from "react-icons/io";
import { FcProcess } from "react-icons/fc";
import MAsterCardIcon from "../../../../../public/my_account/master-card.png";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import ProfileImage from "../../../../../public/seller_profile/profile_image.jpg";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Stepper from "@/app/[locale]/components/stepper";
import { IoIosArrowDown } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import VisaIcon from "../../../../../public/icons/visa-icon.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import MappImage from "../../../../../public/mapp.png";
// Components
import OrderProductItemCard from "@/app/[locale]/components/OrderedProductItemCard";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

export default function MyAccount() {
  const t = useTranslations("IndexPage");
  const pathname = usePathname();
  console.log("pathname", pathname);

  // State to keep track of the current tab
  const [currentTab, setCurrentTab] = useState("YourAccount");
  const [type, setType] = useState("male");

  // Function to handle tab clicks
  const handleToggleTab = (tab: any) => {
    setCurrentTab(tab);
    console.log("clicked tab:", tab);
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const transactions = [
    {
      date: "30/12/2024",
      number: 234531,
      type: "Order Payment",
      amount: -200,
      currency: "AED",
      description: "#4144432",
    },
    {
      date: "30/12/2024",
      number: 234531,
      type: "Refund",
      amount: 200,
      currency: "AED",
      description: "#4144432",
    },
  ];

  const stepsData = [
    { title: "Received Order", date: "On April 5", icon: "Step1Icon" },
    { title: "In Process", date: "On Friday, April 5th", icon: "Step2Icon" },
    { title: "Comfier", date: "On Friday, April 5th", icon: "Step3Icon" },
    {
      title: "It was received",
      date: "On Friday, April 7th",
      icon: "Step4Icon",
    },
    { title: "Delivery", date: "Expected Sunday 20th", icon: "Step5Icon" },
  ];

  const counter = [{}, {}, {}, {}, {}, {}, {}, {}];

  const [modalShow, setModalShow] = useState(false);
  const handleSaveUserChanges = () => {
    console.log("handleSaveUserChanges");
    setModalShow(!modalShow);
  };

  const handleOpenOTPPop = () => {
    setModalShow(!modalShow);
  };

  const [confimationTypePop, setConfimationTypePop] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [firstClick, setFirstClick] = useState(true);

  const [password, setPassword] = useState("38ods20jjj");
  const [isEditablePassword, setIsEditablePassword] = useState(true);
  const [phone, setPhone] = useState("+249 555 190 640");
  const [isEditablePhone, setIsEditablePhone] = useState(true);

  const handleConfirmationOPTPop = (destination: any) => {
    setFirstClick(false);

    if (destination == "password") {
      setConfimationTypePop("password");
      setIsEditablePassword(!isEditablePassword);
    } else {
      setConfimationTypePop("phone");
      setIsEditablePhone(!isEditablePhone);
    }
    setIsEditable(!isEditable);
    if (!firstClick && confimationTypePop === "password") {
      setModalShow(!modalShow);
      setFirstClick(!firstClick);
    }
  };
  const productsData = [
    {
      sellerName: "Karim Muhammad",
      products: [
        { image: "/iphone11.png", name: "Air pods Apple", price: "300 AED" },
        { image: "/iphone11.png", name: "Air pods Apple", price: "300 AED" },
        { image: "/iphone11.png", name: "Air pods Apple", price: "300 AED" },
      ],
      orderNumber: "NGG41111",
      orderTime: "On the day 10:50PM",
    },
    // Add more product data as needed
  ];

  const [feedBackModule, setFeedBackModule] = useState(false);
  const [orderStatusModal, setOrderStatusModal] = useState(false);
  const [cancelTheSelectedProductModal, setCancelTheSelectedProductModal] =
    useState(false);
  const [returnAndExchangeProductModal, setReturnAndExchangeProductModal] =
    useState(false);

  const [isOrderList, setIsOrderList] = useState(true);
  const [isTracking, setIsTracking] = useState(false);
  const [isEditOrder, setIsEditOrder] = useState(false);

  const handleTrackOrder = () => {
    setIsTracking(true);
    setIsEditOrder(false);
    setIsOrderList(!isOrderList);
  };
  const handleEditOrder = () => {
    setIsEditOrder(true);
    setIsTracking(false);
    setIsOrderList(!isOrderList);
  };

  const [isAddressList, setIsAddressList] = useState(false);
  const [deleteAddressModal, setDeleteAddressModal] = useState(false);
  const [deletePaymentModal, setDeletePaymentModal] = useState(false);
  const [sallerFollowersModal, setSallerFollowersModal] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [isAddNewAddress, setIsAddNewAddress] = useState(false);

  return (
    <Container className="bg-[#EDEDF2] min-w-full max-w-full min-h-screen">
      <Row className="m-0 justify-between w-full">
        {/* Tab : Mobile */}
        <Col sm={12} className="md:hidden flex items-center px-0 py-3">
          <div className="flex w-full max-w-full overflow-auto gap-2">
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("YourAccount")}
            >
              <span className="text-[14px] font-medium w-full">
                Your Account
              </span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("MyOrders")}
            >
              <span className="text-[14px] font-medium w-full">Orders</span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("MyAddress")}
            >
              <span className="text-[14px] font-medium w-full">My Address</span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("PaymentMethod")}
            >
              <span className="text-[14px] font-medium w-full">
                Payment Method
              </span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("Wallet")}
            >
              <span className="text-[14px] font-medium w-full">Wallet</span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("ReturnsAndExchanges")}
            >
              <span className="text-[14px] font-medium w-full">
                Returns And Exchanges
              </span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("PreferredSellers")}
            >
              <span className="text-[14px] font-medium w-full">
                Preferred Sellers
              </span>
            </div>
            <div
              className="flex items-center justify-center w-full max-w-fit gap-1 py-2 px-3 bg-white border-[.5px] border-[#838383] rounded-[8px]"
              onClick={() => handleToggleTab("Premium")}
            >
              <span className="text-[14px] font-medium w-full">Premium</span>
            </div>
          </div>
        </Col>

        {/* Tab : DeskTob */}
        <Col sm={2} className="hidden md:block m-0 p-0 bg-white px-2 py-5">
          <h1 className="text-[23px] font-semibold mb-3 px-2">Hello Bushra</h1>
          <div className="flex flex-col gap-y-3">
            <div
              className={`tab-link gap-1 ${
                currentTab === "YourAccount" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("YourAccount")}
            >
              <Image
                src={ProfileIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Your Account</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "MyOrders" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("MyOrders")}
            >
              <Image
                src={InvoiceIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Orders</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "MyAddress" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("MyAddress")}
            >
              <Image
                src={PinIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">My Addresses</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "PaymentMethod" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("PaymentMethod")}
            >
              <Image
                src={CreditIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Payment method </span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "Wallet" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("Wallet")}
            >
              <Image
                src={WalletIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Wallet</span>
            </div>

            <div
              className={`tab-link gap-1 ${
                currentTab === "ReturnsAndExchanges" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("ReturnsAndExchanges")}
            >
              <Image
                src={ReturnsIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Returns and exchanges</span>
            </div>

            <div
              className={`tab-link gap-1 ${
                currentTab === "PreferredSellers" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("PreferredSellers")}
            >
              <Image
                src={BookmarksIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Preferred Sellers</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "Premium" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("Premium")}
            >
              <Image
                src={PremiumIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Premium</span>
            </div>
          </div>
        </Col>

        {/* Content */}
        {currentTab && (
          <Col sm={10} className="m-0 p-2 md:p-0 w-full">
            <div className="w-full md:pl-8 pt-4">
              {/* Your Account */}
              {currentTab === "YourAccount" && (
                <div className="flex flex-col gap-3">
                  <div className="title-wrapper flex items-center justify-between mb-3">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Account Details
                    </span>
                    <div className="flex items-end justify-end gap-1">
                      <RiDeleteBin6Line size={22} />
                      <span className="hidden md:block md:text-[16px] font-normal text-third underline">
                        Delete account
                      </span>
                    </div>
                  </div>
                  <Row className="m-0 p-0 gap-x-10 gap-y-5">
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First Name"
                            value="Bushra Aboubida"
                            className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Aboubida"
                            className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="bushra.ebox@gmail.com"
                            className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <div className="relative mt-1">
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={isEditablePhone}
                            className="block bg-white w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <div
                            className="absolute top-3 right-5 flex items-center gap-1 cursor-pointer"
                            onClick={() => handleConfirmationOPTPop("phone")}
                          >
                            <FaRegEdit size={20} className=""></FaRegEdit>
                            <span className="text-[14px]">
                              {isEditable ? "Save" : "Edit"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date of birth
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="bushra.ebox@gmail.com"
                            className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Type
                        </label>
                        <div className="mt-1 flex items-center gap-3">
                          <div
                            className={`flex items-center gap-1 py-3 px-4 rounded-[8px] type ${
                              type === "female" && "selected_type"
                            }`}
                            onClick={() => setType("female")}
                          >
                            <FaFemale
                              size={18}
                              className=""
                              color={`${type === "female" ? "#fff" : "#000"}`}
                            />
                            <span className="text-[12px] font-normal">
                              Female
                            </span>
                          </div>
                          <div
                            className={`flex items-center gap-1 py-3 px-4 rounded-[8px] type ${
                              type === "male" && "selected_type"
                            }`}
                            onClick={() => setType("male")}
                          >
                            <FaMale
                              size={18}
                              className=""
                              color={`${type === "male" ? "#fff" : "#000"}`}
                            />
                            <span className="text-[12px] font-normal">
                              Male
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} className="m-0 p-0">
                      <div className="title-wrapper flex items-center justify-between mt-3">
                        <span className="text-[20px] md:text-[30px] font-semibold">
                          Privacy
                        </span>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className="m-0 p-0">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="relative mt-1">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isEditablePassword}
                            className="block bg-white w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <div
                            className="absolute top-3 right-5 flex items-center gap-1 cursor-pointer"
                            onClick={() => handleConfirmationOPTPop("password")}
                          >
                            <FaRegEdit size={20} className=""></FaRegEdit>
                            <span className="text-[14px]">
                              {isEditable ? "Save" : "Edit"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} className="m-0 p-0">
                      <div
                        className="primary-btn w-full md:max-w-[25%] mx-auto my-5"
                        onClick={() => handleSaveUserChanges()}
                      >
                        Save changes
                      </div>
                    </Col>
                  </Row>
                  {modalShow && modalShow == true && (
                    <div className="z-50 fixed top-0 left-0 bg-[#0a16347f] min-w-full min-h-screen flex items-center justify-center">
                      <div className="relative flex flex-col items-center justify-center min-h-fit max-h-fit min-w-fit max-w-fit bg-[#fff] rounded-[16px] py-10 px-5">
                        <div className="flex min-w-full justify-end items-end mb-3">
                          <IoClose
                            size={16}
                            className="text-end absolute top-4 right-4 cursor-pointer"
                            onClick={() => {
                              setModalShow(!modalShow);
                            }}
                          />
                        </div>
                        <span className="font-semibold text-[16px] mb-2">
                          Verify your email
                        </span>
                        <span className="text-[14px] text-secondary font-light">
                          OTP has been sent to
                        </span>
                        <span className="text-[14px] text-secondary font-light">
                          karimshebo15@gmail.com
                        </span>
                        <div className="otp-field my-3">
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
                        <div className="flex mt-3">
                          <div
                            className="primary-btn"
                            onClick={() => {
                              setModalShow(!modalShow);
                            }}
                          >
                            Confirm
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* My Orders */}
              {currentTab === "MyOrders" && (
                <div className="">
                  {isOrderList === true ? (
                    <div className="my_order_preview flex flex-col ">
                      <div className="title-wrapper flex items-center justify-between mb-2">
                        <span className="text-[24px] md:text-[30px] font-semibold">
                          My Orders
                        </span>
                        <div className="flex items-end justify-end gap-1">
                          <span className="text-[12px] md:text-[14px] font-normal">
                            Last 3 months
                          </span>
                          <IoMdArrowDropdown size={20} />
                        </div>
                      </div>
                      <span className="text-[20px] font-medium my-3">
                        In Process
                      </span>
                      <div className="w-full flex flex-col gap-3">
                        {productsData.map((order, index) => (
                          <OrderProductItemCard
                            key={index}
                            sellerName={order.sellerName}
                            products={order.products}
                            orderNumber={order.orderNumber}
                            orderTime={order.orderTime}
                            onTrackOrder={handleTrackOrder}
                            onEditOrder={handleEditOrder}
                          />
                        ))}
                      </div>
                      <span className="text-[20px] font-medium my-3">
                        Complete
                      </span>
                      <div className="w-full flex flex-col gap-3">
                        {productsData.map((order, index) => (
                          <OrderProductItemCard
                            key={index}
                            sellerName={order.sellerName}
                            products={order.products}
                            orderNumber={order.orderNumber}
                            orderTime={order.orderTime}
                            onTrackOrder={handleTrackOrder}
                            onEditOrder={handleEditOrder}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full">
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={() => handleEditOrder()}
                        >
                          <IoMdArrowRoundBack size={18} />
                          <span className="text-[14px]">Back to Orders</span>
                        </div>
                        <span className="text-[16px] font-semibold">
                          Order number: ADDFG144174
                        </span>
                      </div>
                      <div className="title-wrapper flex items-center justify-between my-3">
                        <div className="flex flex-col">
                          <span className="text-[20px] md:text-[30px] font-semibold">
                            Orders Tracking
                          </span>
                          <span className="text-[12px] md:text-[14px] font-normal">
                            View and update your product delivery information
                          </span>
                        </div>
                        <div className="flex items-end justify-end gap-1">
                          <div
                            className="primary-btn"
                            onClick={() => setFeedBackModule(!feedBackModule)}
                          >
                            Feedback
                          </div>
                        </div>
                      </div>
                      {/* stepper */}
                      <div className="stepper">
                        <Stepper steps={stepsData} current="0" />
                      </div>
                      {/* order details data box */}
                      <div className="order_data_box my-3 bg-white w-full grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-3 text-[10px] md:text-[15px] border rounded-md">
                        <div className="flex md:flex-col justify-between items-center gap-3">
                          <div className="flex items-center gap-2">
                            <p className="font-bold m-0 p-0">
                              The date of application
                            </p>
                            <IoIosArrowDown className="m-0 p-0" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <RiFileList3Line />
                              <p className="font-semibold m-0 p-0">
                                Order date: 2/2/2024
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <LiaShippingFastSolid />
                              <p className="font-semibold m-0 p-0">
                                Reciept date: 2/2/2024
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-center md:items-start gap-3">
                          <div className="flex items-center gap-2">
                            <p className="font-bold m-0 p-0">The address</p>
                            <IoIosArrowDown className="m-0 p-0" />
                          </div>
                          <p className="font-semibold m-0 p-0 text-center">
                            28 El-modair St Abu Dhabi
                          </p>
                        </div>
                        <div className="flex md:flex-col justify-between items-center gap-3">
                          <div className="flex items-center gap-2">
                            <p className="font-bold m-0 p-0">Payment method</p>
                            <IoIosArrowDown className="m-0 p-0" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Image
                              src={VisaIcon}
                              width={34}
                              height={24}
                              alt="visa"
                            />
                            <p className="font-semibold m-0 p-0">Visa **65</p>
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-center gap-3">
                          <div className="flex items-center gap-2">
                            <p className="font-bold m-0 p-0">Total money</p>
                            <IoIosArrowDown className="m-0 p-0" />
                          </div>
                          <p className="font-semibold">5000 AED</p>
                        </div>
                      </div>
                      {/* product details box */}
                      <div className="bg-white py-3 mb-3 border rounded-md">
                        <div className="flex flex-col px-3">
                          <h2 className="font-bold md:text-[23px]">
                            Product Details
                          </h2>
                          <div className="flex flex-col md:flex-row justify-between md:items-center text-[12px] md:text-[15px] border-b border-slate-200 border-dashed w-full pb-3">
                            <span className="max-w-[30%]">
                              Once confirmed, the products cannot be canceld
                              from the order
                            </span>
                            <span className="font-semibold">
                              Seller Name:{" "}
                              <span className="font-light">Karim Muhammad</span>
                            </span>
                          </div>
                        </div>
                        <div className="p-3">
                          <div className="flex flex-col md:flex-row justify-between md:items-center text-[12px] md:text-[15px]">
                            <p className="font-normal text-[12px]">
                              Products requsted throught the seller: <br />
                              <span className="font-semibold text-[12px]">
                                Karim Muhammad
                              </span>
                            </p>
                            {isEditOrder && (
                              <div className="font-semibold text-[12px]">
                                Reason for cancellation:
                                <select className="select-option font-normal text-[12px]">
                                  <option>Changed my mind</option>
                                  <option>its not good for me</option>
                                  <option>Changed my mind</option>
                                </select>
                              </div>
                            )}
                          </div>

                          {/* Products */}
                          <div>
                            <div className="flex gap-1 items-center my-1 p-2 ">
                              {isEditOrder && (
                                <input
                                  type="checkbox"
                                  value=""
                                  className="accent-blue-600"
                                />
                              )}
                              <div className="flex items-center p-2 gap-2">
                                <Image
                                  src={Iphone11}
                                  width={60}
                                  height={60}
                                  alt="dsf"
                                />
                                <div className="flex flex-col">
                                  <span className="text-[16px] font-medium">
                                    Air pods Apple
                                  </span>
                                  <p className="text-[14px] mt-1 text-slate-500 m-0 p-0">
                                    this product cannot be exchanged or returned
                                  </p>
                                  <span className="text-[14px] font-bold">
                                    300 AED
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* This button shown the cancel product modal */}
                        {isEditOrder && (
                          <button
                            className="block mx-auto my-1 py-2 px-8 bg-blue-500 text-white text-[12px] md:text-[16px] rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                            onClick={() =>
                              setCancelTheSelectedProductModal(true)
                            }
                          >
                            cancel the selected products
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Feedback module */}
                  {feedBackModule && (
                    <>
                      <div className="fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40 z-40">
                        <div className="flex justify-center items-center fixed inset-0 z-50 outline-none">
                          <div>
                            <div className="px-5 border-0 rounded-lg shadow-lg relative flex flex-col w-[250px] md:w-full bg-white outline-none focus:outline-none ">
                              <div className="flex items-start justify-between py-3 border-b border-solid border-gray-300 rounded-t ">
                                <h3 className="text-lg mx-auto font-bold">
                                  Give Feedback
                                </h3>
                              </div>
                              <div>
                                <div className="my-3 flex justify-center items-center gap-1 text-center">
                                  <FaStar size={24} color="#FBBC05" />
                                  <FaStar size={24} color="#FBBC05" />
                                  <FaStar size={24} color="#FBBC05" />
                                  <FaStar size={24} color="#FBBC05" />
                                  <CiStar size={24} color="#8C8C8C" />
                                </div>
                                <span>
                                  Do you have any thoughts your like to share{" "}
                                </span>
                                <form>
                                  <textarea
                                    className="border p-3 mt-3 w-full resize-none outline-none rounded-md"
                                    placeholder="Addtional comment..."
                                  ></textarea>
                                  <div className="w-full flex items-center gap-3 p-2 md:p-5">
                                    <button
                                      onClick={() =>
                                        setFeedBackModule(!feedBackModule)
                                      }
                                      className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                                    >
                                      submit review
                                    </button>
                                    <button
                                      onClick={() =>
                                        setFeedBackModule(!feedBackModule)
                                      }
                                      className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                                    >
                                      not now
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Cancel the selected product module */}
                  {cancelTheSelectedProductModal && (
                    <div className=" z-10 fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
                      <div className=" flex justify-center items-center fixed inset-0 z-50 outline-none">
                        <div>
                          <div className="p-4 w-[275px] md:w-[35vw] text-center px-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between mb-3 text-center border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-lg mx-auto font-bold text-red-500">
                                Cancel products
                              </h3>
                            </div>
                            <div className="mt-3">
                              <p className="pb-3">
                                The request has been submitted successfully .
                                <span className="font-bold mx-1">
                                  are you sure you want to delete this card?
                                </span>
                                <p className="m-0 p-0">You cant undo that</p>
                              </p>

                              <div className="w-full flex items-center justify-center text-center gap-3">
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                                  onClick={() => {
                                    setReturnAndExchangeProductModal(true),
                                      setCancelTheSelectedProductModal(false);
                                  }}
                                >
                                  confirm
                                </button>
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                                  onClick={() =>
                                    setCancelTheSelectedProductModal(
                                      !cancelTheSelectedProductModal
                                    )
                                  }
                                >
                                  cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Return & Exchange product module */}
                  {returnAndExchangeProductModal && (
                    <div className="fixed top-0 right-0 left-0 flex items-center justify-center text-center bg-slate-700/40 w-screen h-screen z-[20]">
                      <div className="relative flex flex-col mx-auto p-3 rounded-[10px] bg-[#FAFAFB] w-[50vw]">
                        <h1 className="text-[23px] font-semibold">
                          Return and exchange
                        </h1>
                        <IoCloseOutline
                          className="absolute top-5 right-5 cursor-pointer"
                          size={29}
                          onClick={() => {
                            setReturnAndExchangeProductModal(
                              !returnAndExchangeProductModal
                            ),
                              setCancelTheSelectedProductModal(false);
                          }}
                        />
                        <div className="product-con-wrapper flex flex-col items-start justify-start gap-1 mt-4 mb-2">
                          <div className="bg-white rounded-[6px] flex items-center justify-between p-1 px-3 w-full border-[.5px] border-[#dddd] ">
                            <div className="flex items-center gap-1 ">
                              <input type="checkbox" name="" id="" />
                              <Image
                                src={Iphone11}
                                width={60}
                                height={40}
                                alt="p"
                              />
                              <span className="text-[16px] font-medium">
                                iPhone 15 Pro Max
                              </span>
                            </div>
                            <span className="text-[#8C8C8C] text-[14px]">
                              It cannot be exchanged or returned
                            </span>
                          </div>
                          <div className="bg-white rounded-[6px] flex items-center justify-between p-1 px-3 w-full border-[.5px] border-[#dddd] ">
                            <div className="flex items-center gap-1 ">
                              <input type="checkbox" name="" id="" />
                              <Image
                                src={Iphone11}
                                width={60}
                                height={40}
                                alt="p"
                              />
                              <span className="text-[16px] font-medium">
                                iPhone 15 Pro Max
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-primary font-medium text-[14px]">
                                Reason for return
                              </span>
                              <IoMdArrowDropdown color="#2C6FF4" size={20} />
                            </div>
                          </div>
                        </div>

                        <div className="bottom-data flex flex-col items-start gap-y-3 w-full mt-3">
                          <div className="flex w-full items-start justify-between">
                            <div className="flex flex-col items-start gap-2">
                              <span className="text-[14px] text-black font-semibold">
                                place of delivery
                              </span>
                              <span className="text-[14px] text-[#ADADAD] pl-3">
                                The place where it was received
                              </span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <span className="text-[14px] text-black font-semibold">
                                place of delivery
                              </span>
                              <span className="text-[14px] text-[#ADADAD] pl-3">
                                The place where it was received
                              </span>
                            </div>
                          </div>
                          <div className="flex w-full items-start justify-between">
                            <div className="flex flex-col items-start gap-2">
                              <span className="text-[14px] text-black font-semibold">
                                place of delivery
                              </span>
                              <span className="text-[14px] text-[#ADADAD] pl-3">
                                The place where it was received
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="primary-btn mx-auto mt-3"
                          onClick={() => {
                            setOrderStatusModal(!orderStatusModal),
                              setReturnAndExchangeProductModal(false);
                          }}
                        >
                          Submit
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Order Status module */}
                  {orderStatusModal && (
                    <div className=" z-10 fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
                      <div className=" flex justify-center items-center fixed inset-0 z-50 outline-none">
                        <div>
                          <div className="p-4 w-[275px] md:w-[35vw] text-center px-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between mb-3 text-center border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-lg mx-auto font-bold text-[#02864A]">
                                Order status
                              </h3>
                            </div>
                            <div className="mt-3">
                              <p className="pb-3">
                                The request has been submitted successfully
                                <br />
                                The order number is #P11231
                              </p>

                              <div className="w-full flex items-center justify-center text-center gap-3">
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                                  onClick={() => setOrderStatusModal(false)}
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {currentTab === "MyAddress" && (
                <div>
                  {isAddNewAddress === false && isEditAddress === false ? (
                    <div className="flex flex-col gap-5">
                      <div className="title-wrapper flex flex-col gap-2">
                        <span className="text-[20px] md:text-[30px] font-semibold">
                          Address
                        </span>
                        <span className="text-[14px]">
                          Manage your saved addresses so you can finish
                          purchases quickly and easily across our stores
                        </span>
                        <div
                          className="primary-btn w-fit mt-3 mx-auto"
                          onClick={() => setIsAddNewAddress(true)}
                        >
                          add new address{" "}
                        </div>
                      </div>

                      <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                          <span className="text-[20px] font-medium">
                            Base addresses
                          </span>
                          <div className="relative bg-white w-full rounded-[10px] flex flex-col md:flex-row items-start justify-between p-4 gap-3 md:gap-0">
                            <div className="flex flex-col items-start gap-1">
                              <span className="text-[20px] font-medium mb-2">
                                Home
                              </span>
                              <span className="text-[14px] gap-3 flex">
                                <span className="text-[14px] font-medium text-[#a4a4a4]">
                                  Name:
                                </span>{" "}
                                Find _Tech
                              </span>
                              <span className="text-[14px] gap-3 flex">
                                <span className="text-[14px] font-medium text-[#a4a4a4]">
                                  Address:
                                </span>{" "}
                                Abu Dhabi
                              </span>
                              <span className="text-[14px] gap-3 flex">
                                <span className="text-[14px] font-medium text-[#a4a4a4]">
                                  Phone:
                                </span>{" "}
                                9710000000
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span
                                className="text-[16px] cursor-pointer"
                                onClick={() => setDeleteAddressModal(true)}
                              >
                                Delete
                              </span>
                              <span
                                className="text-[16px] text-[#a4a4a4] underline cursor-pointer"
                                onClick={() => setIsEditAddress(true)}
                              >
                                Edit
                              </span>
                              <div className="flex items-center gap-1">
                                <div className="flex items-center">
                                  <span className="mr-2">main address</span>
                                  <div
                                    onClick={handleToggle}
                                    className={`relative inline-block w-12 h-6 ${
                                      isToggled ? "bg-blue-500" : "bg-gray-300"
                                    } rounded-full cursor-pointer transition-colors`}
                                  >
                                    <span
                                      className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${
                                        isToggled
                                          ? "transform translate-x-full"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <span className="text-[20px] font-medium">
                            Other addresses
                          </span>
                          <div className="relative bg-white w-full rounded-[10px] flex flex-col md:flex-row items-start justify-between p-4 gap-3 md:gap-0">
                            <div className="flex flex-col items-start gap-1">
                              <span className="text-[20px] font-medium mb-2">
                                Office
                              </span>
                              <span className="text-[14px] gap-3 flex">
                                <span className="text-[14px] font-medium text-[#a4a4a4]">
                                  Name:
                                </span>{" "}
                                Find _Tech
                              </span>
                              <span className="text-[14px] gap-3 flex">
                                <span className="text-[14px] font-medium text-[#a4a4a4]">
                                  Address:
                                </span>{" "}
                                Abu Dhabi
                              </span>
                              <span className="text-[14px] gap-3 flex">
                                <span className="text-[14px] font-medium text-[#a4a4a4]">
                                  Phone:
                                </span>{" "}
                                9710000000
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span
                                className="text-[16px] cursor-pointer"
                                onClick={() => setDeleteAddressModal(true)}
                              >
                                Delete
                              </span>
                              <span
                                className="text-[16px] text-[#a4a4a4] underline cursor-pointer"
                                onClick={() => setIsEditAddress(true)}
                              >
                                Edit
                              </span>
                              <div className="flex items-center gap-1">
                                <div className="flex items-center">
                                  <span className="mr-2">main address</span>
                                  <div
                                    onClick={handleToggle}
                                    className={`relative inline-block w-12 h-6 ${
                                      isToggled ? "bg-blue-500" : "bg-gray-300"
                                    } rounded-full cursor-pointer transition-colors`}
                                  >
                                    <span
                                      className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${
                                        isToggled
                                          ? "transform translate-x-full"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full">
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={() => {
                            setIsAddNewAddress(false), setIsEditAddress(false);
                          }}
                        >
                          <IoMdArrowRoundBack size={18} />
                          <span className="text-[14px]">Back to Address</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt-3">
                        <h2 className="m">
                          {isAddNewAddress ? "Add New Address" : "Edit Address"}
                        </h2>
                        <span className="text-[14px] maz-w-[70%]">
                          Choose your location on the map so that the delivery
                          employee can access{" "}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="flex-col w-full">
                          <div className="flex flex-col gap-4 max-w-[50%]">
                            <div className="">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Full address
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="full-name"
                                  id="full-name"
                                  placeholder="First Name"
                                  value="Bushra Aboubida"
                                  className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                mobile number
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="first-name"
                                  id="first-name"
                                  placeholder="First Name"
                                  value="+971 555 190 640"
                                  className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Name
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="first-name"
                                  id="first-name"
                                  placeholder="First Name"
                                  value="+971 555 190 640"
                                  className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Address
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="first-name"
                                  id="first-name"
                                  placeholder="First Name"
                                  value="+971 555 190 640"
                                  className="block w-full px-4 py-[.8rem] mt-1  rounded-[8px]  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <Image
                            src={MappImage}
                            width={334}
                            height={420}
                            alt="map"
                          />
                        </div>
                      </div>
                      <div
                        className="primary-btn mt-5 mx-auto"
                        onClick={() => {
                          setIsAddNewAddress(false), setIsEditAddress(false);
                        }}
                      >
                        Save Changes
                      </div>
                    </div>
                  )}

                  {/* Delete Address module */}
                  {deleteAddressModal && (
                    <div className=" z-10 fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
                      <div className=" flex justify-center items-center fixed inset-0 z-50 outline-none">
                        <div>
                          <div className="p-4 w-[275px] md:w-[35vw] text-center px-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between mb-3 text-center border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-lg mx-auto font-bold text-red-500">
                                Delete Address
                              </h3>
                            </div>
                            <div className="mt-3">
                              <p className="pb-3">
                                Are you sure you want to delete the Address? You
                                cant go back on that.
                              </p>

                              <div className="w-full flex items-center justify-center text-center gap-3">
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                                  onClick={() => {
                                    setDeleteAddressModal(false);
                                  }}
                                >
                                  confirm
                                </button>
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                                  onClick={() => setDeleteAddressModal(false)}
                                >
                                  cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {currentTab === "PaymentMethod" && (
                <div className="flex flex-col gap-5">
                  <div className="text-[20px] md:title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Payment processes
                    </span>
                    <span className="text-[14px]">
                      We use encrypted methods to save your card details
                      securely
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    {counter &&
                      counter.map((item, index) => (
                        <div
                          key={index}
                          className="relative gap-3 bg-white w-full rounded-[10px] flex flex-col md:flex-row items-center justify-between p-4"
                        >
                          <div className="flex items-center gap-2 min-w-fit">
                            <Image
                              src={MAsterCardIcon}
                              width={49}
                              height={32}
                              alt="m-c"
                            />
                            <span className="text-[16px] font-regular">
                              ***************2442
                            </span>
                          </div>
                          <div className="flex items-center justify-between w-full md:w-[70%]">
                            <span className="text-[16px] font-medium">
                              Ex Date: 4/28
                            </span>
                            <span
                              className="text-[16px] font-regular text-red-400 cursor-pointer"
                              onClick={() => setDeletePaymentModal(true)}
                            >
                              Delete Card
                            </span>

                            <div className="flex flex-col items-center gap-2">
                              <div
                                onClick={handleToggle}
                                className={`relative inline-block w-12 h-6 ${
                                  isToggled ? "bg-blue-500" : "bg-gray-300"
                                } rounded-full cursor-pointer transition-colors`}
                              >
                                <span
                                  className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${
                                    isToggled
                                      ? "transform translate-x-full"
                                      : ""
                                  }`}
                                />
                              </div>
                              <span className="text-[12px]">Main Card</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Delete Payment module */}
                  {deletePaymentModal && (
                    <div className=" z-10 fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
                      <div className=" flex justify-center items-center fixed inset-0 z-50 outline-none">
                        <div>
                          <div className="p-4 w-[275px] md:w-[35vw] text-center px-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between mb-3 text-center border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-lg mx-auto font-bold text-red-500">
                                Delete Card
                              </h3>
                            </div>
                            <div className="mt-3">
                              <p className="pb-3">
                                Are you sure you want to delete this card? You
                                cant go back on that.
                              </p>

                              <div className="w-full flex items-center justify-center text-center gap-3">
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                                  onClick={() => {
                                    setDeletePaymentModal(false);
                                  }}
                                >
                                  confirm
                                </button>
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                                  onClick={() => setDeletePaymentModal(false)}
                                >
                                  cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {currentTab === "Wallet" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-4">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Wallet balance
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="bg-white p-3 md:p-5 min-h-[25vh] max-h-[25vh] min-w-[48%] max-w-[48%] rounded-[8px] flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center gap-1">
                          <MdOutlineAccountBalanceWallet size={20} />
                          <span className="text-[14px] md:text-[18px]">
                            Balance
                          </span>
                        </div>
                        <span className="text-[20px] md:text-[29px]">
                          <b className="font-bold">200.00</b> AED
                        </span>
                      </div>
                      <div className="bg-white p-3 md:p-5 min-h-[25vh] max-h-[25vh] min-w-[48%] max-w-[48%] rounded-[8px] flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center gap-1">
                          <LiaMoneyBillWaveAltSolid size={20} />
                          <span className="text-[14px] md:text-[18px]">
                            Cash Back
                          </span>
                        </div>
                        <span className="text-[20px] md:text-[29px]">
                          <b className="font-bold">250.00</b> AED
                        </span>
                      </div>
                    </div>
                    {/* Redirect to payment get way */}
                    <div className="primary-btn w-fit mx-auto">
                      charge wallet
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Wallet history
                    </span>
                    <div className="overflow-x-auto mb-5">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left hidden sm:table-cell">
                              Number
                            </th>
                            <th className="px-4 py-3 text-left">Type</th>
                            <th className="px-4 py-3 text-left">Amount</th>
                            <th className="px-4 py-3 text-left hidden sm:table-cell">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map((transaction, index) => (
                            <tr key={index} className="">
                              <td className="px-4 py-3">{transaction.date}</td>
                              <td className="px-4 py-3 hidden sm:table-cell">
                                {transaction.number}
                              </td>
                              <td className="px-4 py-3">{transaction.type}</td>
                              <td
                                className={`px-4 py-3 ${
                                  transaction.amount < 0
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {transaction.amount < 0 ? "" : "+"}
                                {transaction.amount} {transaction.currency}
                              </td>
                              <td className="px-4 py-3 hidden sm:table-cell">
                                {transaction.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {currentTab === "ReturnsAndExchanges" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Returns And Exchanges
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "PreferredSellers" && (
                <div className="flex flex-col gap-5 bg-white p-3 rounded-lg">
                  <div className="title-wrapper flex items-center justify-between">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Preferred Sellers
                    </span>
                    <span className="text-[12px] md:text-[18px]">
                      followers: 200
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-3 mb-5">
                    {counter &&
                      counter.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between w-full"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={ProfileImage}
                              width={60}
                              height={60}
                              alt="photo"
                              className=" rounded-full"
                            />
                            <div className="flex flex-col gap-[3px]">
                              <span className="text-[14px] md:text-[18px] font-semibold">
                                Bushra Aboubida
                              </span>
                              <span className="text-[12px] font-normal">
                                Electronics Section
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() => setSallerFollowersModal(true)}
                            className="flex text-center px-4 py-1 border-[.5px] border-[#c2c2c2] bg-white cursor-pointer rounded-[4px] text-[12px] md:text-[14px]"
                          >
                            Unfollow
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* Cancel Follow a Seller module */}
                  {sallerFollowersModal && (
                    <div className=" z-10 fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
                      <div className=" flex justify-center items-center fixed inset-0 z-50 outline-none">
                        <div>
                          <div className="p-4 w-[275px] md:w-[35vw] text-center px-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between mb-3 text-center border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-lg mx-auto font-bold text-red-500">
                                Unfollow confirm
                              </h3>
                            </div>
                            <div className="mt-3">
                              <p className="pb-3">
                                Are you sure you want to Unfollow this seller?
                              </p>

                              <div className="w-full flex items-center justify-center text-center gap-3">
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                                  onClick={() => {
                                    setSallerFollowersModal(false);
                                  }}
                                >
                                  confirm
                                </button>
                                <button
                                  className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                                  onClick={() => setSallerFollowersModal(false)}
                                >
                                  cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {currentTab === "Premium" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Premium
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

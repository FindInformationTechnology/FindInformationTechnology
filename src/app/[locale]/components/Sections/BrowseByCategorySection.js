import "@/app/[locale]/scss/sections/browseByCategory.scss";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Slider from "react-slick";
import { Modal, Button, Container, Row } from "react-bootstrap";

// Assets
import NextArrowIcon from "../../../../../public/icons/categories/next-arrow-icon.svg";
import PreviousArrowIcon from "../../../../../public/icons/categories/previous-arrow-icon.svg";
import PhoneIcon from "../../../../../public/icons/categories/phone-icon.svg";
import CameraIcon from "../../../../../public/icons/categories/camera-icon.svg";
import ComputerIcon from "../../../../../public/icons/categories/computer-icon.svg";
import SmartWatchIcon from "../../../../../public/icons/categories/smart-watch-icon.svg";
import GamePadIcon from "../../../../../public/icons/categories/gamepad-icon.svg";
import HeadPhoneIcon from "../../../../../public/icons/categories/headphone-icon.svg";
import CamerasPhoto from "../../../../../public/icons/categories/Category-Camera.svg";
import ComputerPhoto from "../../../../../public/icons/categories/Category-Computer.svg";
import GamePadPhoto from "../../../../../public/icons/categories/Category-Gamepad.svg";
import HeadPhonesPhoto from "../../../../../public/icons/categories/Category-Headphone.svg";
import SmartWatchesPhoto from "../../../../../public/icons/categories/Category-Smartwatch.svg";
import PhonesPhoto from "../../../../../public/icons/categories/Category-phones.svg";

const BrowseByCategorySection = () => {
  const t = useTranslations("BrowseByCategorySection");
  const categories = [
    { name: "Phones", icon: "phone", link: "/products/phone" },
    { name: "Computer", icon: "computer", link: "/products/computer" },
    { name: "Camera", icon: "camera", link: "/products/camera" },
    { name: "Smart Watch", icon: "smart_watch", link: "/products/smart_watch" },
    { name: "Game Pad", icon: "game_pad", link: "/products/gamepad" },
    { name: "Head Phones", icon: "head_phones", link: "/products/headphones" },
    { name: "Phones", icon: "phone", link: "/products/phone" },
    { name: "Computer", icon: "computer", link: "/products/computer" },
    { name: "Camera", icon: "camera", link: "/products/camera" },
    { name: "Smart Watch", icon: "smart_watch", link: "/products/smart_watch" },
    { name: "Game Pad", icon: "game_pad", link: "/products/gamepad" },
    { name: "Head Phones", icon: "head_phones", link: "/products/headphones" },
    { name: "Phones", icon: "phone", link: "/products/phone" },
    { name: "Phones", icon: "phone", link: "/products/phone" },
    { name: "Computer", icon: "computer", link: "/products/computer" },
    { name: "Camera", icon: "camera", link: "/products/camera" },
    { name: "Smart Watch", icon: "smart_watch", link: "/products/smart_watch" },
    { name: "Game Pad", icon: "game_pad", link: "/products/gamepad" },
    { name: "Head Phones", icon: "head_phones", link: "/products/headphones" },
    { name: "Phones", icon: "phone", link: "/products/phone" },
    { name: "Computer", icon: "computer", link: "/products/computer" },
    { name: "Camera", icon: "camera", link: "/products/camera" },
    { name: "Smart Watch", icon: "smart_watch", link: "/products/smart_watch" },
    { name: "Game Pad", icon: "game_pad", link: "/products/gamepad" },
    { name: "Head Phones", icon: "head_phones", link: "/products/headphones" },
    { name: "Phones", icon: "phone", link: "/products/phone" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  };

  // TODO: change this cat names to arabic as well through a function that read url path and check the current selected lang
  const renderIcon = (icon) => {
    switch (icon) {
      case "phone":
        return (
          <Image src={PhonesPhoto} width={80} height={80} alt="category-icon" />
        );
      case "computer":
        return (
          <Image
            src={ComputerPhoto}
            width={80}
            height={80}
            alt="category-icon"
          />
        );
      case "camera":
        return (
          <Image
            src={CamerasPhoto}
            width={80}
            height={80}
            alt="category-icon"
          />
        );
      case "smart_watch":
        return (
          <Image
            src={SmartWatchesPhoto}
            width={80}
            height={80}
            alt="category-icon"
          />
        );
      case "game_pad":
        return (
          <Image
            src={GamePadPhoto}
            width={80}
            height={80}
            alt="category-icon"
          />
        );
      case "head_phones":
        return (
          <Image
            src={HeadPhonesPhoto}
            width={80}
            height={80}
            alt="category-icon"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container className="browse-by-category-section-wrapper mb-5 relative">
      <Row className="w-full m-0 p-0 items-start justify-between mb-4">
        <div className="flex items-center justify-between m-0 p-0 mb-4">
          <h1 className="main-title">{t("title")}</h1>
          {/* <div className="flex items-center gap-2">
          <Image src={PreviousArrowIcon} width={46} height={46} alt="previous-arrow-icon" />
          <Image src={NextArrowIcon} width={46} height={46} alt="next-arrow-icon" />
        </div> */}
        </div>
      </Row>
      <Row className="flex items-center gap-0 w-full overflow-hidden m-0 p-0">
        <Slider {...settings}>
          {categories &&
            categories.map((category, index) => (
              <div className="" key={index}>
                <button
                  type="button"
                  className="mb-2 btn btn-outline-[#D0D3D8] flex items-center justify-center category-btn"
                  style={{ borderColor: "#D0D3D8 !important" }}
                >
                  <Link
                    href={category.link}
                    className="no-underline flex flex-col items-center justify-center text-center min-w-[145px] max-w-[145px] min-h-[120px] max-h-[120px]"
                  >
                    {renderIcon(category.icon)}
                    <span className="text-center text-[14px] font-normal mt-1 no-underline text-black">
                      {category.name}
                    </span>
                  </Link>
                </button>
                <button
                  type="button"
                  className="sec-cat-row btn btn-outline-[#D0D3D8] items-center justify-center category-btn"
                  style={{ borderColor: "#D0D3D8 !important" }}
                >
                  <Link
                    href={category.link}
                    className="no-underline flex flex-col items-center justify-center text-center min-w-[145px] max-w-[145px] min-h-[120px] max-h-[120px]"
                  >
                    {renderIcon(category.icon)}
                    <span className="text-center text-[14px] font-normal mt-1 no-underline text-black">
                      {category.name}
                    </span>
                  </Link>
                </button>
              </div>
            ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default BrowseByCategorySection;

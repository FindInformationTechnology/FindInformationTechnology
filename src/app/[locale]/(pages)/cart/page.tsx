"use client";
import "@/app/[locale]/scss/globals.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

// Assets
import EmptyCartIcon from "../../../../../public/cart/empty-cart-icon.svg";
import AirPodsProduct from "../../../../../public/products/airpod-product.png";
import CartIcon from "../../../../../public/icons/shopping-cart.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import TabbyLogo from "../../../../../public/product-details/tabby-logo.png";

// Components

export default function Cart() {
  const t = useTranslations("CartPage");
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <Container className="wrapper min-h-screen relative m-0 min-w-full max-w-full bg-[#FAFAFB]">
      {/* Title */}
      <Row className="m-0 p-0 mt-3">
        <Col xs={12} sm={12} md={12} lg={12} className="">
          <span className="text-[20px] lg:text-[32px] font-semibold">
            {t("header")}
          </span>
        </Col>
      </Row>

      {/* Card UI */}
      <div className="w-full">
        <Row className="m-0 p-0">
          <Col md={12} className="m-0 p-0">
            <div className="text-[18px] mt-5 mb-3 font-light rounded-[8px] p-2 bg-[#F19371] text-white flex items-center justify-center w-full mx-auto">
              <Image
                src={CartIcon}
                width={18}
                height={18}
                alt="icon"
                className="mx-2"
              />
              the seller: <b className="mx-2">Karim Mohamed</b>
            </div>
          </Col>
          <Col md={8} className="m-0 p-0">
            <div className="flex flex-col w-full gap-2">
              {[{}, {}].map((item, index) => (
                <div
                  className="cart-card flex w-full items-start justify-between bg-white rounded-[12px] p-3"
                  key={index}
                >
                  <div className="left-side-img-product-name flex items-center">
                    <Image
                      src={AirPodsProduct}
                      width={135}
                      height={167}
                      alt="Product"
                      className="object-cover rounded mr-4"
                    />
                    <div className="flex flex-col items-start gap-0">
                      <h4 className="text-[16px] font-semibold">
                        Apple iPhone 14 Pro Max
                      </h4>
                      <ul className="list-disc flex flex-col gap-1 list-inside p-0 mt-1">
                        <li className="text-[14px]">
                          Get it as soon as
                          <b className=" text-[#02864A] mx-1">Fri, Apr 26</b>
                        </li>
                        <li className="text-[14px] text-[#8C8C8C]">
                          This product cannot be exchanged or returned.
                        </li>
                        <li className="text-[14px] text-[#8C8C8C]">
                          One year warranty
                        </li>
                      </ul>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <label className="text-gray-700 mx-2 font-medium text-[16px]">
                            Qty:
                          </label>
                          <select className="border p-2 rounded w-[70px] h-[35px]">
                            {[1, 2, 3, 4].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex items-center gap-2">
                          <RiDeleteBin6Line size={18} />
                          <span className="flex text-[14px] font-light">
                            Remove
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-side-product-price flex flex-col items-end gap-1">
                    <p className="text-red-500 text-[12px] font-bold m-0 p-0">
                      25% Off
                    </p>
                    <p className="text-[18px] font-bold m-0 p-0">AED 2500</p>
                    <p className="text-gray-500 text-[14px] line-through m-0 p-0">
                      AED 3000
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={4} className="m-0 p-0">
            <div className="flex flex-col items-start gap-2 bg-white p-3 rounded-[10px] ml-3 w-full">
              <span className="text-[16px] font-semibold mb-3">Discount code</span>
                <div className="flex justify-between items-center w-full">
                  <input
                    type="text"
                    placeholder="Enter the code"
                    className="border p-2 rounded w-full md:w-auto"
                  />
                  <button className="primary-btn-outline">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <p className="text-gray-700 text-[16px]">Subtotal (2 product)</p>
                  <p className="font-semibold text-[16px]">3500 AED</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 text-[16px]">Shipping fees</p>
                  <p className="font-semibold text-[16px]">20 AED</p>
                </div>
                <hr className="h-[1px] bg-[#8C8C8C] py-2" />
                <div className="flex justify-between items-center w-full">
                  <p className="text-[16px]">Total</p>
                  <p className="font-semibold text-[16px]">3520 AED</p>
                </div>
                <button className="primary-btn w-full">
                  Complete
                </button>
            </div>
            <div className="flex items-center justify-start w-full mt-2 ml-3 bg-white p-2 rounded-[10px]">
                <Image
                  src={TabbyLogo}
                  width={95}
                  height={95}
                  alt="tabby-logo"
                />
                <span className="text-[14px]">
                  Pay 6 monthly payments of AED 12,890.00
                </span>
              </div>
          </Col>
        </Row>
      </div>

      {/* Empty Card */}
      {/* <Row className="empty-card-ui m-0 p-0 mt-3">
        <Col xs={12} sm={12} md={12} lg={12} className="">
          <div className="w-full flex flex-col items-center justify-center gap-3 mx-auto">
            <Image
              src={EmptyCartIcon}
              width={350}
              height={279}
              alt="NoNotificationsIcon"
            />
            <span className="font-bold text-[20px] max-w-[35%] text-center">
              {t("emptyCartText")}
            </span>
            <span className="primary-btn font-normal text-[16px]">
              {t("ShoppingNow")}
            </span>
          </div>
        </Col>
      </Row> */}
    </Container>
  );
}

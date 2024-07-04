import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import ProductDetails from "@/app/[locale]/components/ProductDetailsContainer";
import MacBookAirImage from "../../../../../public/products/MacBook_Air_Retina_M1.png";
import IPhone11Image from "../../../../../public/products/iphone-11-product.png";

const DealsOfTheDay = () => {
  const t = useTranslations("BannerSection");
  const pathname = usePathname();

  const products = [
    {
      id: 0,
      name: "Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone",
      price: "$569.00",
      oldPrice: "$759.00",
      save: "$199.00",
      features: [
        "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
        "Commanding Power Design: Twin 16+1+2 Phases Digital VRM",
        "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
      ],
      freeShipping: true,
      freeGift: true,
      promotion: true,
      promotionExpireAfter: 10,
      totalOfStock: 75,
      totalAvailable: 75,
      totalSold: 25,
      images: [
        "/products/phone-product.png",
        "/products/small-phone-product-one.png",
        "/products/small-phone-product-two.png",
        "/products/small-phone-product-three.png",
        "/products/small-phone-product-four.png",
      ],
    },
    {
      id: 1,
      name: "Iphone 11 max pro",
      price: "$234.00",
      oldPrice: "$443.00",
      save: "$234.00",
      features: [
        "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
        "Commanding Power Design: Twin 16+1+2 Phases Digital VRM",
        "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
      ],
      freeShipping: true,
      freeGift: true,
      promotion: true,
      promotionExpireAfter: 3,
      totalOfStock: 23,
      totalAvailable: 42,
      totalSold: 12,
      images: [
        "/products/small-phone-product-one.png",
        "/products/small-phone-product-three.png",
        "/products/phone-product.png",
        "/products/small-phone-product-two.png",
        "/products/small-phone-product-four.png",
      ],
    },
    {
      id: 2,
      name: "Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone",
      price: "$569.00",
      oldPrice: "$759.00",
      save: "$199.00",
      features: [
        "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
        "Commanding Power Design: Twin 16+1+2 Phases Digital VRM",
        "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
      ],
      freeShipping: true,
      freeGift: true,
      promotion: true,
      promotionExpireAfter: 10,
      totalOfStock: 75,
      totalAvailable: 75,
      totalSold: 25,
      images: [
        "/products/phone-product.png",
        "/products/small-phone-product-one.png",
        "/products/small-phone-product-two.png",
        "/products/small-phone-product-three.png",
        "/products/small-phone-product-four.png",
      ],
    },
    {
      id: 3,
      name: "Iphone 11 max pro",
      price: "$234.00",
      oldPrice: "$443.00",
      save: "$234.00",
      features: [
        "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
        "Commanding Power Design: Twin 16+1+2 Phases Digital VRM",
        "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
      ],
      freeShipping: true,
      freeGift: true,
      promotion: true,
      promotionExpireAfter: 3,
      totalOfStock: 23,
      totalAvailable: 42,
      totalSold: 12,
      images: [
        "/products/small-phone-product-one.png",
        "/products/small-phone-product-three.png",
        "/products/phone-product.png",
        "/products/small-phone-product-two.png",
        "/products/small-phone-product-four.png",
      ],
    },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const counter = Array.from({ length: 8 }, (_, index) => ({ id: index % 4 }));
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Container className="deals-of-the-day recent-arrive-wrapper mb-5 w-full">
      <Row className="m-0 p-0 w-full">
        <Col xs={12} sm={12} md={10} className="flex flex-col px-0">
          <div className="flex items-start justify-between w-full bg-[#2C6FF4] text-white text-[16px] font-medium p-3 rounded-lg">
            {t("title")}
          </div>

          <ProductDetails
             product={selectedProduct}
             initialImage={selectedProduct.images[0]}
          />
        </Col>

        <Col
          md={2}
          lg={2}
          className="desktop-other-product-scrolled-section hidden md:flex flex-col items-start justify-start gap-2 max-h-[550px] max-w-fit overflow-y-auto"
        >
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedProduct(item)}
              className="relative flex flex-col items-start justify-center bg-[#EDEDED] border-[#EDEDED] border-[0.5px] rounded-[10px] min-w-[215px] max-w-[215px] min-h-fit max-h-fit "
            >
              <span className="absolute top-2 left-2 text-[12px] bg-white rounded-[8px] p-1 px-2">
                Free shipping
              </span>
              <Image
                src={MacBookAirImage}
                width={140}
                height={90}
                alt="product"
                className="mx-auto mt-5"
              />
              <div className="p-3 flex flex-col items-start mt-3">
                <span className="text-[12px] font-medium">{item.name}</span>
                <span className="text-[12px] font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </Col>

        <Col
          xs="12"
          sm="12"
          className="mobile-other-product-scrolled-section md:hidden flex items-center gap-0 mt-3 w-full overflow-hidden m-0 p-0"
        >
          <div className="flex-col items-center gap-0 w-full overflow-hidden m-0 p-0">
            <Slider {...sliderSettings}>
              {counter &&
                counter.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-center border-[#dddd] border-[.5px] rounded-md min-w-[120px] max-w-[120px] min-h-[120px] max-h-[120px]"
                  >
                    <Image
                      src={IPhone11Image}
                      width={80}
                      height={80}
                      alt="product-image"
                      className="m-0 p-0 mx-auto text-center min-w-fit min-h-fit"
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DealsOfTheDay;

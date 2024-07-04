import "@/app/[locale]/scss/sections/storiesSection.scss";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Button,
  Container,
  Row,
} from "react-bootstrap";
import ProductCard from "@/app/[locale]/components/ProductCard";
import Slider from "react-slick";

const AllProductsByThisSeller = () => {
  const t = useTranslations("BestSellingSection");

  const counter = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  const settings = {
    dots: false,
    arrows: false,
    // infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplaySpeed: 1500,
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

  return (
    <Container className="best-selling-wrapper m-0 p-0 mb-5">
      <Row className="w-full m-0 p-0">
        <div className="flex items-center justify-between mb-4 m-0 p-0">
          <h1 className="main-title">All products by this seller </h1>
          <Button className="primary-btn-outline">
            {t("viewAll")}
          </Button>
        </div>
      </Row>
      <Row className="flex items-centerZzz gap-0 w-full overflow-hidden m-0 p-0">
      <Slider
        {...settings}
      >
        {counter && counter.map((item, index) => <ProductCard key={index} />)}
        </Slider>
      </Row>
    </Container>
  );
};

export default AllProductsByThisSeller;

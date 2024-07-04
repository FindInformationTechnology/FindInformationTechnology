"use client";
import "@/app/[locale]/scss/sections/storiesSection.scss";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Container, Row } from "react-bootstrap";
import ProductCard from "@/app/[locale]/components/ProductCard";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const OffersSection = () => {
  const t = useTranslations("OffersSection");
  const pathname = usePathname();
  console.log("pathname", pathname);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleRedirection = (param) => {
    if (isMounted) {
      console.log("url param:", param);
      window.location.href = `${pathname.slice(0, 3)}/products?key=${param}`;
    }
  };

  if (!isMounted) return null;

  const counter = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

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
    <Container className="offers-section-wrapper wrapper remove-m-p mb-5">
      <Row className="w-full m-0 p-0">
        <div className="flex items-center justify-between m-0 p-0 mb-4">
          <h1 className="main-title">{t("title")}</h1>
          <Button
            onClick={() => handleRedirection("offers")}
            className="primary-btn-outline"
          >
            {t("viewAll")}
          </Button>
        </div>
      </Row>
      <Row className="flex items-center gap-0 w-full overflow-hidden m-0 p-0">
        <Slider {...settings}>
          {counter && counter.map((item, index) => <ProductCard key={index} />)}
        </Slider>
      </Row>
    </Container>
  );
};

export default OffersSection;

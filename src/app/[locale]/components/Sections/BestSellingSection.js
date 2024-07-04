import "@/app/[locale]/scss/sections/storiesSection.scss";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Container, Row } from "react-bootstrap";
import ProductCard from "@/app/[locale]/components/ProductCard";
import Slider from "react-slick";
import { usePathname } from "next/navigation";

const BestSellingSection = () => {
  const t = useTranslations("BestSellingSection");
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
    <Container className="best-selling-wrapper mb-5">
      <Row className="w-full m-0 p-0">
        <div className="flex items-center justify-between mb-4 m-0 p-0">
          <h1 className="main-title">{t("title")}</h1>
          <Button className="primary-btn-outline" onClick={() => handleRedirection("best_selling")}>{t("viewAll")}</Button>
        </div>
      </Row>
      <Row className="flex items-centerZzz gap-0 w-full overflow-hidden m-0 p-0">
        <Slider {...settings}>
          {counter && counter.map((item, index) => <ProductCard key={index} />)}
        </Slider>
      </Row>
    </Container>
  );
};

export default BestSellingSection;

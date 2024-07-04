import "@/app/[locale]/scss/globals.scss";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";

// Assets
import OurCustomersIcon from "../../../../../public/popularity-counter/our-coustomer-counter-icon.svg";
import OurProductsIcon from "../../../../../public/popularity-counter/our-proucts-counter-icon.svg";
import OurStoreIcon from "../../../../../public/popularity-counter/our-store-counter-icon.svg";

const PopularityCounterSection = () => {
  // const t = useTranslations("PopularityCounterSection");

  // const p2 = t("p2");

  return (
    <Container className="my-5 w-full">
      <Row className="w-full justify-content-around">
        <Col
          xs="4"
          sm="3"
          md="3"
          lg="3"
          className="flex flex-col items-center justify-center text-center gap-2 md:gap-4"
        >
          <Image
          className="block md:hidden"
            src={OurCustomersIcon}
            width={30}
            height={30}
            alt="our-customers-icon"
          />
          <Image
          className="md:block hidden"
            src={OurCustomersIcon}
            width={100}
            height={100}
            alt="our-customers-icon"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-[16px] md:text-[36px]">
              104,560
            </span>
            <span className="font-normal text-[14px] md:text-[20px]">
              Our Customer
            </span>
          </div>
        </Col>
        <Col
          xs="4"
          sm="3"
          md="3"
          lg="3"
          className="flex flex-col items-center justify-center text-center gap-2 md:gap-4"
        >
          <Image
          className="block md:hidden"
            src={OurProductsIcon}
            width={30}
            height={30}
            alt="our-customers-icon"
          />
          <Image
          className="md:block hidden"
            src={OurProductsIcon}
            width={100}
            height={100}
            alt="our-customers-icon"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-[16px] md:text-[36px]">
              104,560
            </span>
            <span className="font-normal text-[14px] md:text-[20px]">
              Our Products
            </span>
          </div>
        </Col>
        <Col
          xs="4"
          sm="3"
          md="3"
          lg="3"
          className="flex flex-col items-center justify-center text-center gap-2 md:gap-4"
        >
          <Image
          className="block md:hidden"
            src={OurStoreIcon}
            width={30}
            height={30}
            alt="our-customers-icon"
          />
          <Image
          className="md:block hidden"
            src={OurStoreIcon}
            width={100}
            height={100}
            alt="our-customers-icon"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-[16px] md:text-[36px]">
              104,560
            </span>
            <span className="font-normal text-[14px] md:text-[20px]">
              Our Store
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularityCounterSection;

import "@/app/[locale]/scss/sections/advertisements.scss";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

// Assets
import AdvertisementThreeImage from "../../../../../public/advertisement/advertisement-three-full.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import PlayIcon from "../../../../../public/icons/play-icon.png";

const AdvertisementThree = () => {
  const t = useTranslations("AdvertisementThree");

  // const p2 = t("p2");

  return (
    <Container className="m-0 p-0">
      <Row className="w-full  m-0 p-0">
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="12"
          className="advertisement-three-wrapper rounded-[10px] py-4 w-full text-center"
        >
          <h3 className="text-white font-bold text-[16px] md:text-[30px] mb-4">
            Get $3 Cashback! Min Order of $30
          </h3>
          <span className="text-[14px] text-white font-light px-3 py-2 bg-[#ffffff30] border-[2px] border-dashed border-white ">
            Use Code : GROCERY1920
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default AdvertisementThree;

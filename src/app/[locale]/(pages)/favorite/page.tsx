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
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// Components
import ProductCard from "../../components/ProductCard";
import ProductSideFilter from "@/app/[locale]/components/ProductSideFilter";
import Dropdown from "@/app/[locale]/components/DropdownGroup";

export default function Favorite() {
  const t = useTranslations("FavoritePage");
  const pathname = usePathname();
  console.log("pathname", pathname);
  const products = [
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <Container className="wrapper min-h-screen relative m-0 min-w-full max-w-full bg-[#FAFAFB]">
      <Row className="m-0 p-0 justify-between">
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="12"
          className="m-0 p-0 flex flex-col mt-3"
        >
          <div className="col-header hidden md:flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[20px] lg:text-[32px] font-semibold">{t('header')}</span>
            </div>
          </div>
          <Row className="products-cards-show-row min-w-full max-w-full mt-3 gap-0 p-0">
            {products &&
              products.map((item, index) => (
              <Col xs='6' sm='4' md='3' lg='3' key={index} className="p-1 pb-2">
                <ProductCard />
              </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

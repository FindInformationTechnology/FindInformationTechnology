"use client";
import "@/app/[locale]/scss/globals.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

// Assets
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import DealsAdds from '../../../../../public/advertisement/Deals OF The day page add.png'

// Components
import ProductCard from "../../components/ProductCard";
import ProductSideFilter from "@/app/[locale]/components/ProductSideFilter";
import Dropdown from "@/app/[locale]/components/DropdownGroup";
import AdvertisementOne from "../../components/Sections/AdvertisementOne";
import AdvertisementTwo from "../../components/Sections/AdvertisementTwo";
import AdvertisementThree from "../../components/Sections/AdvertisementThree";

export default function Products() {
  const t = useTranslations("ProductsPage");
  const pathname = usePathname();
  console.log("pathname", pathname);

  const products = [{}, {}, {},{}, {}, {}];

  return (
    // min-h-screen relative min-w-full max-w-full bg-[#FAFAFB]
    <Container className="m-0 min-w-full max-w-full bg-[#FAFAFB]">
      {/*  items-start justify-start gap-5 */}
      <Row className="justify-between">
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="12"
          className="m-0 p-0 mobile-filter block md:hidden mt-3"
        >
          <div className="flex space-x-4">
            <Dropdown label="City" options={["City", "Option 1", "Option 2"]} />
            <Dropdown
              label="Section"
              options={["Section", "Option 1", "Option 2"]}
            />
            <Dropdown
              label="Seller"
              options={["Seller", "Option 1", "Option 2"]}
            />
            <Dropdown
              label="Brand"
              options={["Brand", "Option 1", "Option 2"]}
            />
            <Dropdown
              label="Color"
              options={["Color", "Option 1", "Option 2"]}
            />
          </div>
        </Col>

        <Col md={2} className="desktop-filter hidden md:block m-0 p-0 mb-5 ">
          {/* <ProductSideFilter /> */}

          <Card className="m-0 border-0 rounded-none py-4 px-0">
            <Card.Body className="m-0 p-0">
              <div className="flex items-center justify-center">
                <span className="font-semibold text-[18px] ">
                  Filter products
                </span>
              </div>

              <Form className="flex flex-col gap-4">
                <Form.Group controlId="formCity" className="space-y-2 px-3">
                  <Form.Label className="filter-section-title flex items-center justify-center gap-1 my-4">
                    <span className="text-[16px] font-semibold">City</span>
                    <IoIosArrowDown />
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Abu Dhabi"
                    name="city"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Al Ain"
                    name="city"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Ajman"
                    name="city"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Dubai"
                    name="city"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Ras Al Khaimah"
                    name="city"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Sharjah"
                    name="city"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <span className="mx-auto mt-3 text-[12px] font-semibold underline justify-center flex w-full cursor-pointer hover:text-secondary">
                    View All
                  </span>
                </Form.Group>

                <Form.Group controlId="formSection" className="space-y-2 px-3">
                  <Form.Label className="filter-section-title flex items-center justify-center gap-1 mb-4">
                    <span className="text-[16px] font-semibold">Section</span>
                    <IoIosArrowDown />
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Accessories"
                    name="section"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Camera & photo"
                    name="section"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Tablet and laptop"
                    name="section"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Sound and radio"
                    name="section"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="radio"
                    label="Headphones and earphones"
                    name="section"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <span className="mx-auto mt-3 text-[12px] font-semibold underline justify-center flex w-full cursor-pointer hover:text-secondary">
                    View All
                  </span>
                </Form.Group>

                <hr className="" />

                <Form.Group controlId="formBrand" className="space-y-2 px-3">
                  <Form.Label className="filter-section-title flex items-center justify-center gap-1 mb-4">
                    <span className="text-[16px] font-semibold">Brand</span>
                    <IoIosArrowDown />
                  </Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="Samsung"
                    name="brand"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Apple"
                    name="brand"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Xiaomi"
                    name="brand"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Huawei"
                    name="brand"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Realme"
                    name="brand"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Lenovo"
                    name="brand"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <span className="mx-auto mt-3 text-[12px] font-semibold underline justify-center flex w-full cursor-pointer hover:text-secondary">
                    View All
                  </span>
                </Form.Group>

                <hr className="" />

                <Form.Group
                  controlId="formPopularModels"
                  className="space-y-2 px-3"
                >
                  <Form.Label className="filter-section-title flex items-center justify-center gap-1 mb-4">
                    <span className="text-[16px] font-semibold">
                      Popular models
                    </span>
                    <IoIosArrowDown />
                  </Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="AirPods 3rd"
                    name="PopularModels"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="iPhone 15 Pro Max"
                    name="PopularModels"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="iPhone 14 Pro Max"
                    name="PopularModels"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Galaxy A34"
                    name="PopularModels"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Galaxy A54"
                    name="PopularModels"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Galaxy S23 Ultra"
                    name="PopularModels"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <span className="mx-auto mt-3 text-[12px] font-semibold underline justify-center flex w-full cursor-pointer hover:text-secondary">
                    View All
                  </span>
                </Form.Group>

                <hr className="" />

                <Form.Group controlId="formColor" className="space-y-2 px-3">
                  <Form.Label className="filter-section-title flex items-center justify-center gap-1 mb-4">
                    <span className="text-[16px] font-semibold">the color</span>
                    <IoIosArrowDown />
                  </Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="black"
                    name="color"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="blue"
                    name="color"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="green"
                    name="color"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="silver"
                    name="color"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="white"
                    name="color"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Pink"
                    name="color"
                    className="text-gray-700 text-[14px] cursor-pointer"
                  />
                  <span className="mx-auto mt-3 text-[12px] font-semibold underline justify-center flex w-full cursor-pointer hover:text-secondary">
                    View All
                  </span>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* className="flex flex-col mt-3 items-start justify-start" */}
        <Col xs={12} sm={9} md={9} lg={9} className="m-0 p-0 mt-0">
          <Image src={DealsAdds} alt="adds" className="mb-5" />

          <div>
            <div className="col-header hidden md:flex flex-col md:flex-row items-center justify-between min-w-full">
              <div className="flex flex-col items-start gap-0">
                <span className="text-[20px] lg:text-[26px] font-semibold">
                Deals For Electronics
                </span>
                <span className="text-[14px] font-light text-[#8C8C8C]">
                  {t("results")}
                </span>
              </div>
              <div className="primary-btn-outline">{t("ViewMore")}</div>
            </div>
            <Row className="products-cards-show-row min-w-full max-w-full mt-4 gap-x-0 gap-y-3 mb-5">
              {products &&
                products.map((item, index) => (
                  <Col md={4} key={index} className="m-0 px-1">
                    <ProductCard />
                  </Col>
                ))}
            </Row>
          </div>

          <div>
            <div className="col-header hidden md:flex flex-col md:flex-row items-center justify-between min-w-full">
              <div className="flex flex-col items-start gap-0">
                <span className="text-[20px] lg:text-[26px] font-semibold">
                Deals For fashion
                </span>
                <span className="text-[14px] font-light text-[#8C8C8C]">
                  {t("results")}
                </span>
              </div>
              <div className="primary-btn-outline">{t("ViewMore")}</div>
            </div>
            <Row className="products-cards-show-row min-w-full max-w-full mt-4 gap-x-0 gap-y-3 mb-5">
              {products &&
                products.map((item, index) => (
                  <Col md={4} key={index} className="m-0 px-1">
                    <ProductCard />
                  </Col>
                ))}
            </Row>
          </div>


          <div>
            <div className="col-header hidden md:flex flex-col md:flex-row items-center justify-between min-w-full">
              <div className="flex flex-col items-start gap-0">
                <span className="text-[20px] lg:text-[26px] font-semibold">
                Deals For Furniture
                </span>
                <span className="text-[14px] font-light text-[#8C8C8C]">
                  {t("results")}
                </span>
              </div>
              <div className="primary-btn-outline">{t("ViewMore")}</div>
            </div>
            <Row className="products-cards-show-row min-w-full max-w-full mt-4 gap-x-0 gap-y-3 mb-5">
              {products &&
                products.map((item, index) => (
                  <Col md={4} key={index} className="m-0 px-1">
                    <ProductCard />
                  </Col>
                ))}
            </Row>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

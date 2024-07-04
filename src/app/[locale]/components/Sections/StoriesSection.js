import "@/app/[locale]/scss/sections/storiesSection.scss";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Modal, Button, Container, Row } from "react-bootstrap";
import StoryModal from "@/app/[locale]/components/Global/Modal/StoryModal";
import { Carousel } from "react-bootstrap";

// Assets
import { IoPlayCircleOutline } from "react-icons/io5";
import PlayIcon from "../../../../../public/icons/play-icon.png";
import BushraProfilePic from "../../../../../public/seller_profile/profile_image.jpg";
import ProductImage from "../../../../../public/products/phone-product.png";
import ProductImage2 from "../../../../../public/products/MacBook_Air_Retina_M1.png";
import Iphone13ProMax from "../../../../../public/products/iphone-11-product.png";
import { IoCloseOutline } from "react-icons/io5";

const StoriesSection = () => {
  const t = useTranslations("StoriesSection");
  const [isShow, invokeModal] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const initModal = () => {
    return invokeModal(!false);
  };

  const stories = [
    {
      title: "Ahmed Ali",
      coverImg:
        "https://images.unsplash.com/photo-1576558345433-58e777a5e423?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Kmal",
      coverImg:
        "https://images.unsplash.com/photo-1584949514123-474cfa705dfe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Ali",
      coverImg:
        "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Ali",
      coverImg:
        "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bushra Aboubida",
      coverImg:
        "https://plus.unsplash.com/premium_photo-1683288446478-d998f96592e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Kmal",
      coverImg:
        "https://plus.unsplash.com/premium_photo-1683288062196-bdb1c61c7b95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bushra Aboubida",
      coverImg:
        "https://images.unsplash.com/photo-1618354691249-18772bbac3a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Kmal",
      coverImg:
        "https://plus.unsplash.com/premium_photo-1683288062196-bdb1c61c7b95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Ali",
      coverImg:
        "https://images.unsplash.com/photo-1576558345433-58e777a5e423?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Kmal",
      coverImg:
        "https://images.unsplash.com/photo-1584949514123-474cfa705dfe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Ali",
      coverImg:
        "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Ali",
      coverImg:
        "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bushra Aboubida",
      coverImg:
        "https://plus.unsplash.com/premium_photo-1683288446478-d998f96592e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Kmal",
      coverImg:
        "https://plus.unsplash.com/premium_photo-1683288062196-bdb1c61c7b95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bushra Aboubida",
      coverImg:
        "https://images.unsplash.com/photo-1618354691249-18772bbac3a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ahmed Kmal",
      coverImg:
        "https://plus.unsplash.com/premium_photo-1683288062196-bdb1c61c7b95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 500,
    nextButton: false,
    previousButton: false,
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
    <Container className="stories-section-wrapper mb-5 wrapper">
      <Row className="w-full m-0 p-0">
        <div className="flex items-center justify-between m-0 p-0 mb-4">
          <h1 className="main-title">{t("title")}</h1>
        </div>
      </Row>
      <Row className="flex items-center gap-0 w-full overflow-hidden m-0 p-0">
        <Slider {...settings}>
          {stories &&
            stories.map((story, index) => (
              <div
                className="stories-container relative"
                key={index}
                style={{ backgroundImage: `url('${story.coverImg})` }}
                // onClick={initModal}
                onClick={() => setModalShow(true)}
              >
                <div className="top w-full h-[2.5rem] bg-[#2C6FF4] hover:bg-[#F19371] text-white text-center font-medium rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-center text-[14px]">
                  {story.title}
                </div>
                <div className=" absolute top-[50%] right-[35%]">
                  <Image
                    src={PlayIcon}
                    width={50}
                    height={50}
                    alt="play-icon"
                  />
                </div>
              </div>
            ))}
        </Slider>
      </Row>

      {/* Modal */}
      {/* <StoryModal show={modalShow} onHide={() => setModalShow(false)} /> */}

      {/* Tested Modal */}
      {/* <Modal show={isShow} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal> */}

      {modalShow && modalShow == true && (
        <div className="story-modal-wrapper z-50 fixed top-0 left-0 bg-[#0a16347f] min-w-full min-h-screen flex items-center justify-center">
          <div className="relative min-h-[95vh] max-h-[95vh] min-w-[32vw] max-w-[32vw] rounded-xl  flex bg-[#bdbdbd]">
            <div className=" absolute top-7 left-5 flex items-center gap-2">
              <Image
                src={BushraProfilePic}
                width={40}
                height={40}
                alt="we"
                className="rounded-full"
              />
              <span className="flex items-center gap-2 text-[14px] text-white">
                Bushra Aboubida
                <span className="text-[14px] text-[#ddd] font-light">4h</span>
              </span>
            </div>
            <IoCloseOutline
              className=" absolute top-8 right-5 cursor-pointer z-10"
              onClick={() => setModalShow(false)}
              size={24}
              color="#fff"
            />
            <Carousel
              interval={10000}
              touch={true}
              className="flex items-center justify-center min-w-full min-h-full"
            >
              <Carousel.Item className="">
                <Image
                  src={Iphone13ProMax}
                  className="mx-auto max-h-[550px]"
                  width={500}
                  min-height={550}
                  max-height={550}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="">
                <Image
                  src={ProductImage}
                  className="mx-auto max-h-[550px]"
                  width={500}
                  min-height={550}
                  max-height={550}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item className="">
                <Image
                  src={ProductImage2}
                  className="mx-auto max-h-[550px]"
                  width={500}
                  min-height={550}
                  max-height={550}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      )}

      {/* <Modal
        show={modalShow}
        centered
        aria-labelledby="contained-modal-title-vcenter"
        className="story-modal-wrapper"
      >
        <div className="min-h-[95vh] max-h-[95vh] rounded-[8px] overflow-hidden flex bg-[#0A1634]">
          <Carousel interval={10000} touch={true}>
            <Carousel.Item>
              <Image
                src={ProductImage}
                className="d-block min-w-full min-h-[90vh]"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={ProductImage}
                className="d-block min-w-full min-h-[90vh]"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={ProductImage}
                className="d-block min-w-full min-h-[90vh]"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Modal> */}
    </Container>
  );
};

export default StoriesSection;

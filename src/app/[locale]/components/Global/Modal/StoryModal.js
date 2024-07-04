import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductImage from "../../../../../../public/products/phone-product.png";
import { Carousel } from 'react-bootstrap';

function StoryModal(props) {
  const img =
    "https://images.unsplash.com/photo-1576558345433-58e777a5e423?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    // TODO: Style the story pop
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    //   className="story-modal-wrapper bg-[#121a3276]"
    // >
    // </Modal>
      <div className="flex justify-center items-center min-h-screen bg-[#0A1634]">
      <Carousel interval={10000} touch={true}>
        <Carousel.Item>
          <Image src={ProductImage}
            className="d-block w-100"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ProductImage}
            className="d-block w-100"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ProductImage}
            className="d-block w-100"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default StoryModal;

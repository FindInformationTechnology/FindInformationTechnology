import React, { useState } from "react";
import Image from "next/image";
import BigProductImage from "../../../../public/products/phone-product.png";

const ProductDetails = ({ product, initialImage }) => {
  const [selectedImage, setSelectedImage] = useState(initialImage);

  return (
    <div className="product-details-wrapper mt-10 flex flex-col md:flex-row items-start justify-start max-w-fit">
      <div className="product-images-container flex items-center justify-start gap-0">
        <div className="small-product-images flex flex-col items-center justify-between h-full gap-10">
          {product.images.slice(1).map((img, index) => (
            <Image
            key={index}
            src={img}
            className="min-w-[53px] max-w-[53px] min-h-[60px] max-h-[60px]"
            width={53}
          height={60}
            alt='small-img'
            onClick={() => setSelectedImage(img)}
          />
          ))}
        </div>
        <div className="relative big-product-image flex items-center justify-center">
          <div className="absolute top-0 left-3 flex flex-col bg-[#F19371] rounded-[8px] text-white py-1 px-3">
            <span className="text-[12px]">SAVE</span>
            <span className="text-[12px] font-medium">{product.save}</span>
          </div>
          <Image
            src={selectedImage}
            alt="big-product-image"
            className="min-w-[400px] max-w-[400px] min-h-[200px] max-h-[200px]"
            width={400}
            height={200}
          />
        </div>
      </div>

      <div className="product-details-container flex flex-col max-w-fit">
        <span className="product-title-name font-bold text-[16px]">
          {product.name}
        </span>
        <div className="flex items-center gap-3 mt-3 mb-1">
          <span className="product-price font-bold text-[20px]">
            {product.price}
          </span>
          <span className="product-price text-[#666666] font-medium line-through text-[16px]">
            {product.oldPrice}
          </span>
        </div>
        <ul className="flex flex-col gap-2 mt-2">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="text-[14px] text-[#929292] font-light flex items-center"
            >
              <div className="bg-[#666666] rounded-full w-[5px] h-[6px] mx-2"></div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-start gap-2 mt-3">
          {product.freeShipping && (
            <span className="bg-[#b3ebb353] text-[#1ABA1A] rounded-[5px] text-center text-[14px] px-3 py-2">
              Free Shipping
            </span>
          )}
          {product.freeGift && (
            <span className="bg-[#f1352b33] text-[#F1352B] rounded-[5px] text-center text-[14px] px-3 py-2">
              Free Gift
            </span>
          )}
        </div>
        <div className="flex items-center mt-3 border-b-[0.5px] border-[#dddd] pb-3">
          <div className="flex items-center justify-between">
            <span className="hidden md:block text-[13px] font-normal max-w-[30%]">
              Hurry up! Promotion will expire in
            </span>
            <div className="flex items-center gap-3">
              {["10d", "12h", "44m", "60s"].map((time, index) => (
                <div
                  key={index}
                  className="bg-[#EBEDF3] w-[65px] h-[75px] rounded-[10px] flex items-center justify-center gap-2 text-[16px] font-semibold text-black"
                >
                  <span>{time.slice(0, -1)}</span>
                  <span className="text-[#666666]">{time.slice(-1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div className="progress bg-[#121A32] rounded-[10px] max-h-[8px] min-h-[8px]">
            <div
              className="progress-bar rounded-[10px] bg-[#121A32]"
              role="progressbar"
              style={{ width: "50%", backgroundColor: "#121A32" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span className="flex items-center gap-2 text-[#666666] font-light">
            Sold: <b className="font-bold text-black text-[14px]">26/75</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

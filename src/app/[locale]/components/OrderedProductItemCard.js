import Image from 'next/image';

import Iphone11 from "../../../../public/products/iphone-11-product.png";

const ProductItem = ({ sellerName, products, orderNumber, orderTime, onTrackOrder, onEditOrder }) => (
  <div className="relative bg-white w-full rounded-[10px] flex flex-col md:flex-row items-start justify-between p-3 gap-3 md:gap-0">
    <div className="left-side flex flex-col">
      <span className="text-[14px]">
        <b>Seller Name:</b> {sellerName}
      </span>
      {products.map((product, index) => (
        <div key={index} className="flex items-center p-2 gap-2">
          <Image src={Iphone11} width={60} height={60} alt={product.name} />
          <div className="flex flex-col gap-1">
            <span className="text-[16px] font-medium">{product.name}</span>
            <span className="text-[13px] font-light">{product.price}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="right-side flex flex-col justify-between min-h-full w-full md:max-w-[25%] gap-3 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="primary-btn" onClick={onTrackOrder}>Order Tracking</div>
        <div className="primary-btn-outline font-semibold" onClick={onEditOrder}>Edit Order</div>
      </div>
      <div className="hidden md:flex flex-col absolute bottom-3 right-3 text-center gap-1 mr-3">
        <span className="text-[16px] underline text-[#818181] font-light">
          Order number {orderNumber}
        </span>
        <span className="text-[16px]">{orderTime}</span>
      </div>
      <div className="flex md:hidden flex-col text-center gap-1">
        <span className="text-[16px] underline text-[#818181] font-medium">
          Order number {orderNumber}
        </span>
        <span className="text-[14px]">{orderTime}</span>
      </div>
    </div>
  </div>
);

export default ProductItem;

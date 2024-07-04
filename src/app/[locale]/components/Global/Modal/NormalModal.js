import React from 'react';

function NormalModal({ onClose, children }) {
  return (
    <div className=" max-w-[1920px] lg:w-auto w-full p-0 h-full lg:h-[600px] top-0 lg:top-[5%] overflow-hidden modal-two  modal z-[5] fixed inset-0 flex items-center mx-0 lg:mx-[15rem] my-0 lg:my-[4rem] rounded-[20px] justify-center bg-[#002f12]">
      <div className="modal-content">
        <span className="close cursor-pointer z-[1] text-white text-xxl absolute top-[2%] right-[2%]" onClick={onClose}>
          &times;
        </span>
        <div className="video-container lg:w-auto w-[62%] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default NormalModal;

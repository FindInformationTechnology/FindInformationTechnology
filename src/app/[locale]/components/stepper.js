import React from "react";
import Step1Icon from "../../../../public/icons/stepper/step-1-icon.svg";
import Step2Icon from "../../../../public/icons/stepper/step-2-icon.svg";
import Step3Icon from "../../../../public/icons/stepper/step-3-icon.svg";
import Step4Icon from "../../../../public/icons/stepper/step-4-icon.svg";
import Step5Icon from "../../../../public/icons/stepper/step-5-icon.svg";
import Image from "next/image";
// import Step6Icon from '../../../../public/icons/stepper/step-6-icon.svg'

const Stepper = ({ steps, current }) => {
  return (
    <div className="stepper-container relative  max-w-full flex items-start justify-start gap-0">
      {steps.map((step, index) => (
        <div
          key={index}
          className="z-2 flex justify-center items-center  max-w-full w-full"
        >
          <div className="step text-center gap-2 max-w-full  w-full">
            <span
              className={`step-title text-[14px] font-normal max-w-full ${
                current >= index ? "text-[#00a862]" : "text-[#000]"
              }`}
            >
              {step.title}
            </span>
            <div
              className={`step-icon ${
                current >= index ? "bg-[#00a862]" : "bg-[#d9d9d9]"
              }`}
            >
              {step.icon === "Step1Icon" && (
                <Image src={Step1Icon} width={24} height={24} alt="er" />
              )}
              {step.icon === "Step2Icon" && (
                <Image src={Step2Icon} width={24} height={24} alt="er" />
              )}
              {step.icon === "Step3Icon" && (
                <Image src={Step3Icon} width={24} height={24} alt="er" />
              )}
              {step.icon === "Step4Icon" && (
                <Image src={Step4Icon} width={24} height={24} alt="er" />
              )}
              {step.icon === "Step5Icon" && (
                <Image src={Step5Icon} width={24} height={24} alt="er" />
              )}
            </div>
            <div className="step-info">
              <span
                className={`step-date text-[12px] font-medium max-w-full ${
                  current >= index ? "text-[#00a862]" : "text-[#000]"
                }`}
              >
                {step.date}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="step-line"></div>
    </div>
  );
};

export default Stepper;

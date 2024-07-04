import Link from "next/link";
import "@/app/[locale]/scss/globals.scss";
import React from "react";
import { useTranslations } from "next-intl";
import Svg from '../../../../../public/404.svg'
import Image from "next/image";

const PageNotFound = () => {
  const t = useTranslations("ThankYouPage");
  const description = t("description");
  return (
    <div className="min-h-screen pb-20 bg-[#fff] flex flex-col items-center justify-center min-w-full max-w-full">
      <div className="flex min-w-full max-w-full flex-col items-center justify-center">

      <Image src={Svg}  alt="404" className="m-0 p-0" />
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="font-bold text-[28px]">That page can’t be found.</h1>
        <span className="font-normal text-[14px] mt-2 mb-8 max-w-[70%] text-center">We’re sorry, but the page you requested could not be found.</span>
        <div className="primary-btn">Back to Home  page</div>
      </div>
      </div>
    </div>
  );
};

export default PageNotFound;

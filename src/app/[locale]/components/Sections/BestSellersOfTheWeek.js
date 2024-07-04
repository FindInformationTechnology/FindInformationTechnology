import "@/app/[locale]/scss/sections/storiesSection.scss";
import React from "react";
import { useTranslations } from "next-intl";
import { Button, Container, Row } from "react-bootstrap";
import BestSellersOfTheWeekCard from "@/app/[locale]/components/BestSellersOfTheWeekCard";

// Assets
import { FaArrowRightLong } from "react-icons/fa6";

const BestSellersOfTheWeek = () => {
  const t = useTranslations("BestSellersOfTheWeek");

  const counter = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Container
      className="best-seller-of-the-week-container mb-5"
    >
      <div className="best-seller-of-the-week rounded-[10px] min-w-full max-w-full">
        <h1 className="text-[20px] md:text-[32px] text-white font-semibold">
          {t('title')}
        </h1>
        <div className="text-[#dddd] text-[12px] md:text-[16px] leading-normal font-light mt-[8px]">
        {t('subTitle')}
        </div>
        <div className="md:flex md:items-start md:justify-between md:gap-2 mt-[32px]">
          <div className="primary-btn flex items-center justify-center text-center text-[16px] font-normal rounded-[8px] text-white min-w-fit max-w-fit">
          {t('viewAll')}
            <FaArrowRightLong color="#fff" size={12} className="mx-[8px]" />
          </div>

          <div className="flex mt-4 md:mt-0 md:items-start md:justify-between gap-3 overflow-x-auto">
            <BestSellersOfTheWeekCard />
            <BestSellersOfTheWeekCard />
            <BestSellersOfTheWeekCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BestSellersOfTheWeek;

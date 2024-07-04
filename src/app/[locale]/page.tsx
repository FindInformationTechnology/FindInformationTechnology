"use client";
// import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { DefaultSeo } from "next-seo";
import Image from "next/image";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import "@/app/[locale]/scss/globals.scss";
import AdvertisementFourFull from "../../../public/advertisement/advertisement-four-full.png";
import AdvertisementFourFullMobile from "../../../public/advertisement/air-pods-pro-addvertisment.png";

// Components
import HomeBanner from "./components/Sections/HomeBanner";
import StoriesSection from "./components/Sections/StoriesSection";
import BrowseByCategorySection from "./components/Sections/BrowseByCategorySection";
import DealsOfTheDay from "./components/Sections/DealsOfTheDay";
import AdvertisementOne from "./components/Sections/AdvertisementOne";
import AdvertisementTwo from "./components/Sections/AdvertisementTwo";
import AdvertisementThree from "./components/Sections/AdvertisementThree";
import OffersSection from "./components/Sections/OffersSection";
import BestSellingSection from "./components/Sections/BestSellingSection";
import RecentArriveSection from "./components/Sections/RecentArriveSection";
import BestSellersOfTheWeek from "./components/Sections/BestSellersOfTheWeek";
import PopularityCounterSection from "./components/Sections/PopularityCounterSection";

export default function Home() {
  // const t = useTranslations('IndexPage');
  // const pathname = usePathname();
  // console.log('pathname', pathname);

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* SEO Head */}
      <Head>
        <NextSeo
          title="Find Online Shopping"
          description="online shopping"
          canonical="https://www.find.ie/"
          openGraph={{
            url: "https://www.find.ie/",
            title: "Find Online Shopping",
            description: "online shopping",
            images: [{ url: "https://find.com/images/find-logo.png" }],
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Page */}
      <HomeBanner />
      <StoriesSection />
      <BrowseByCategorySection />
      <DealsOfTheDay />
      <div className="container mb-5">
        <AdvertisementOne />
      </div>
      <OffersSection />
      <div className="container mb-5">
        <AdvertisementTwo />
      </div>
      <BestSellersOfTheWeek />
      <BestSellingSection />
      <div className="container mb-5">
        <AdvertisementThree />
      </div>
      <RecentArriveSection />
      <Image
        className="md:block hidden p-0 m-0 rounded-[8px]"
        src={AdvertisementFourFull}
        width={1375}
        height={430}
        alt="advertisement-four-full"
      />
      <Image
        className="block md:hidden p-0 m-0"
        src={AdvertisementFourFullMobile}
        width={343}
        height={354}
        alt="advertisement-four-full-mobile"
      />
      <PopularityCounterSection />
    </main>
  );
}

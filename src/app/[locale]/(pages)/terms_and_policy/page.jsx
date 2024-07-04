import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const TermsAndPolicy = () => {
  const t = useTranslations("TermsAndPolicyPage");
  const description = t("description");
  return (
    <div className="min-h-screen bg-[#dddd] flex flex-col items-start justify-start p-5 pt-32">
      <h1 className="font-bold text-[32px] my-5">{t("title")}</h1>
      <div className="text-start max-w-[75%]">
        <div
          className="main-content__body"
          data-lead-id="main-content-body"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <Link
        href="/"
        className="bg-[#4b7cf6dd] px-4 py-2 rounded-md text-white my-5 mb-10 no-underline"
      >
        {t("buttonText")}
      </Link>
    </div>
  );
};

export default TermsAndPolicy;

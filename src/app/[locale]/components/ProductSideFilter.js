import "@/app/[locale]/scss/components/productSideFilter.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { IoIosArrowDown } from "react-icons/io";

// Assets

const ProductSideFilter = () => {
  const t = useTranslations("ProductCard");
  const pathname = usePathname();
  const [favoritesToggler, setFavoritesToggler] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Abo Dhabi");
  const [cites, setCities] = useState([
    "Abo Dhabi",
    "Ajman",
    "Dubai",
    "Sharjah",
    "Ras Elkhaimah",
  ]);
  const [selectedSection, setSelectedSection] = useState(
    "Headphones, earphones and accessories"
  );
  const [sections, setSections] = useState([
    "Headphones, earphones and accessories",
    "Camera and photo",
    "Tablet, laptop and accessories",
    "Sound and radio",
    "Camera and photo",
    "Tablet, laptop and accessories",
    "Sound and radio",
  ]);
  const [selectedSeller, setSelectedSeller] = useState("karim Mohamed Store");
  const [seller, setSeller] = useState([
    "karim Mohamed Store",
    "Apple Store",
    "Tabarak Store",
    "Tech Line Store",
    "Ehab Store",
    "B.Tech Store",
    "Tredline Store",
  ]);
  const [brand, setSelectedBrand] = useState(
    "Headphones, earphones and accessories"
  );
  const [brands, setBrands] = useState([
    "Samsung",
    "Apple",
    "Xiaomi",
    "Huawei",
    "Realme",
    "Lenovo",
  ]);
  const handleTheSellerChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSeller([...selectedSeller, value]);
    } else {
      setSelectedSeller(selectedSeller.filter((item) => item !== value));
    }
  };
  return (
    <div className="product-side-filter min-h-screen bg-white min-w-[240px] flex flex-col items-center justify-start">
      <span className="font-semibold text-[20px] my-5">Filter products</span>

      <div className="city-filter-section flex flex-col">
        <div className="filter-section-title flex items-center gap-2 mx-auto mb-4">
          <span className="text-[20px] font-semibold">City</span>
          <IoIosArrowDown />
        </div>
        <div className="cities-list min-w-full">
          <div className="city-checkboxes-group flex flex-col space-y-4 px-3">
            {cites.map((city) => (
              <label
                key={city}
                className="inline-flex items-center justify-start min-w-full"
              >
                <input
                  type="radio"
                  name="city"
                  value={city}
                  checked={selectedCity === city}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="form-radio text-blue-600 h-5 w-5"
                />
                <span className="ml-2 text-gray-700 max-w-[70%] overflow-clip">
                  {city}
                </span>
              </label>
            ))}
            <span className="mx-auto my-4 text-[14px] font-medium underline">
              View All
            </span>
          </div>
        </div>
      </div>

      <div className="section-filter-section flex flex-col">
        <div className="filter-section-title flex items-center gap-2 mx-auto mb-4">
          <span className="text-[20px] font-semibold">Section</span>
          <IoIosArrowDown />
        </div>
        <div className="sections-list">
          <div className="sections-checkboxes-group flex flex-col space-y-4 px-3">
            {sections.map((section) => (
              <label
                key={section}
                className="inline-flex items-center justify-start min-w-full"
              >
                <input
                  type="radio"
                  name="city"
                  value={section}
                  checked={selectedSection === section}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="form-radio text-blue-600 h-5 w-5"
                />
                <span className="ml-2 text-gray-700 max-w-[70%] overflow-clip">
                  {section}
                </span>
              </label>
            ))}
            <span className="mx-auto my-4 text-[14px] font-medium underline">
              View All
            </span>
          </div>
        </div>
      </div>

      <hr className=" min-h-[3px] min-w-full" />

      <div className="seller-filter-section flex flex-col">
        <div className="filter-section-title flex items-center gap-2 mx-auto mb-4">
          <span className="text-[20px] font-semibold">The Seller</span>
          <IoIosArrowDown />
        </div>
        <div className="seller-list">
          <div className="seller-checkboxes-group flex flex-col space-y-4 px-3">
            {seller.map((seller) => (
              <label
                key={seller}
                className="inline-flex items-center justify-start min-w-full"
              >
                <input
                  type="checkbox"
                  name="store"
                  value={seller}
                  checked={selectedSeller.includes(seller)}
                  onChange={handleTheSellerChange}
                  className="form-checkbox text-blue-600 h-5 w-5"
                />
                <span className="ml-2 text-gray-700 max-w-[70%] overflow-clip">
                  {seller}
                </span>
              </label>
            ))}
            <span className="mx-auto my-4 text-[14px] font-medium underline">
              View All
            </span>
          </div>
        </div>
      </div>

      <hr className=" min-h-[3px] min-w-full" />

      <div className="brand-filter-section flex flex-col">
        <div className="filter-section-title flex items-center gap-2 mx-auto mb-4">
          <span className="text-[20px] font-semibold">Brand</span>
          <IoIosArrowDown />
        </div>
        <div className="brands-list">
          <div className="seller-checkboxes-group flex flex-col items-start justify-start min-w-full space-y-4 px-3">
            {brands.map((seller) => (
              <label
                key={seller}
                className="inline-flex items-center justify-start min-w-full"
              >
                <input
                  type="checkbox"
                  name="store"
                  value={seller}
                  checked={selectedSeller.includes(seller)}
                  onChange={handleTheSellerChange}
                  className="form-checkbox text-blue-600 h-5 w-5"
                />
                <span className="ml-2 text-gray-700">{seller}</span>
              </label>
            ))}
            <span className="mx-auto my-4 text-[14px] font-medium underline">
              View All
            </span>
          </div>
        </div>
      </div>

      <hr className=" min-h-[3px] min-w-full" />

      <div className="brand-filter-section flex flex-col">
        <div className="filter-section-title flex items-center gap-2 mx-auto mb-4">
          <span className="text-[20px] font-semibold">Popular models</span>
          <IoIosArrowDown />
        </div>
        <div className="brands-list">
          <div className="seller-checkboxes-group flex flex-col items-start justify-start w-full space-y-4 px-3">
            {brands.map((seller) => (
              <label
                key={seller}
                className="inline-flex items-start justify-start min-w-full"
              >
                <input
                  type="checkbox"
                  name="store"
                  value={seller}
                  checked={selectedSeller.includes(seller)}
                  onChange={handleTheSellerChange}
                  className="form-checkbox text-blue-600 h-5 w-5"
                />
                <span className="ml-2 text-gray-700 ">{seller}</span>
              </label>
            ))}
            <span className="mx-auto my-4 text-[14px] font-medium underline">
              View All
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideFilter;

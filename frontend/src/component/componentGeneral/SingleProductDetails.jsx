import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useProductStore from "../../store/useProductStore.js";
import GeneralInfoStore from "../../store/GeneralInfoStore.js";
import ProductGallery from "./ProductGallery.jsx";
import SinglePageCheckout from "./SinglePageCheckout.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import HeroSection from "../HeroSection.jsx";
import ProblemSection from "../ProblemSection.jsx";
import SolutionSection from "../SolutionSection.jsx";
import BenefitsCTASection from "../BenefitsCTASection.jsx";
import SectionBackground from "../SectionBackground.jsx";
import Footer from "../Footer.jsx";
import ProductCarousel from "./ProductCarousel.jsx";
import CountDown from "../CountDown.jsx";

const ProductDetails = ({ slug }) => {
  const hasPushedRef = useRef(false);

  const { fetchProductBySlug, product, loading, error, resetProduct } =
    useProductStore();

  const { GeneralInfoList } = GeneralInfoStore();

  const [currentProductSlug, setCurrentProductSlug] = useState(null);

  useEffect(() => {
    if (slug !== currentProductSlug) {
      // Reset product state and show loading
      resetProduct(); // Clear previous product data
      setCurrentProductSlug(slug);
      fetchProductBySlug(slug);
    }
  }, [slug, currentProductSlug, fetchProductBySlug, resetProduct]);

  const calculateDiscountPercentage = (
    priceBeforeDiscount,
    priceAfterDiscount,
  ) => {
    if (
      !priceBeforeDiscount ||
      !priceAfterDiscount ||
      priceBeforeDiscount <= priceAfterDiscount
    )
      return 0;
    const discountAmount = priceBeforeDiscount - priceAfterDiscount;
    return Math.ceil((discountAmount / priceBeforeDiscount) * 100);
  };

  const location = useLocation();
  const url = `${window.location.origin}${location.pathname}`;
  const title = product?.name;

  const discountPercentage =
    product?.finalPrice && product?.finalDiscount
      ? calculateDiscountPercentage(product.finalPrice, product.finalDiscount)
      : 0;

  // Data layer for View Content

  useEffect(() => {
    if (!product || hasPushedRef.current) return;

    const price =
      product.finalDiscount > 0 ? product.finalDiscount : product.finalPrice;

    const discount =
      product.finalDiscount > 0
        ? product.finalPrice - product.finalDiscount
        : 0;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_item",
      ecommerce: {
        currency: "BDT",
        value: price,
        items: [
          {
            item_id: product.productId,
            item_name: product.name,
            currency: "BDT",
            discount,
            item_variant: "Default",
            price,
            quantity: 1,
          },
        ],
      },
    });

    hasPushedRef.current = true;
  }, [product]);

  if (loading || product?.slug !== slug) {
    return (
      <div className={"flex items-center justify-center min-h-screen"}>
        <CircularProgress />
      </div>
    ); // Loading message while new product data is being fetched
  }

  return (
    <div className="">
      {error && (
        <div className="text-red-500 flex items-center justify-center pt-40">
          Error: {error}
        </div>
      )}

      {product && (
        <div>
          {/*Seo Meta Data*/}
          <title>{`${product?.name || product?.metaTitle} | ${GeneralInfoList?.CompanyName}`}</title>
          <meta name="description" content={product?.metaDescription} />
          <meta name="keywords" content={product.metaKeywords.join(", ")} />
          <meta
            property="og:title"
            content={`${product?.name || product?.metaTitle} | ${GeneralInfoList?.CompanyName}`}
          />
          <meta property="og:description" content={product?.metaDescription} />
          <meta property="og:image" content={product?.thumbnailImage} />
          <meta property="og:url" content={window.location.href} />

          <div>
            <HeroSection product={product} />
            <ProblemSection />
            <SolutionSection />

            <SectionBackground>
              <div className={"max-w-4xl mx-auto"}>
                <ProductGallery
                  images={product.images}
                  discount={discountPercentage}
                  productName={product.name}
                />
              </div>
              <BenefitsCTASection />
              <ProductCarousel/>
              <CountDown />
              <SinglePageCheckout product={product} />
              <Footer />
            </SectionBackground>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

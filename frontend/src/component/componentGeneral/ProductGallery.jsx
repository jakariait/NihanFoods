import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const ProductGallery = ({ images, discount, zoom = true, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const getImageUrl = useCallback((imageName) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    return `${apiUrl.replace("/api", "")}/uploads/${imageName}`;
  }, []);

  useEffect(() => {
    if (images?.length > 0) {
      images.forEach((imageName) => {
        const img = new window.Image();
        img.src = getImageUrl(imageName);
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [imageName]: true }));
        };
      });
    }
  }, [images, getImageUrl]);

  const changeImage = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  if (!images || images.length === 0) {
    return <div className="w-full aspect-square bg-gray-100 animate-pulse" />;
  }

  const currentImageUrl = getImageUrl(images[activeIndex]);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div ref={containerRef} className="relative w-full max-w-[700px]">
          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            <div className="absolute inset-0 bg-gray-100">
              {loadedImages[images[activeIndex]] && (
                <img
                  src={currentImageUrl}
                  alt={productName || 'Product'}
                  className="w-full h-full object-cover"
                />
              )}
            </div>


            {images.length > 1 && (
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs z-10">
                {activeIndex + 1} / {images.length}
              </div>
            )}

            {zoom && (
              <button
                className="absolute bottom-2 left-2 p-2 bg-white rounded-full cursor-pointer shadow-md"
                aria-label="full screen"
                onClick={() => setIsZoomed(true)}
              >
                <BsArrowsFullscreen />
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-between mt-3 px-2">
              <button
                onClick={() => changeImage("prev")}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                disabled={activeIndex === 0}
              >
                <IoIosArrowBack />
              </button>

              <div className="flex gap-3 overflow-x-auto max-w-[calc(100%-80px)] py-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 transition-all ${
                      activeIndex === idx 
                        ? 'border-orange-500' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <img
                      src={getImageUrl(img)}
                      alt={`${productName} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => changeImage("next")}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                disabled={activeIndex === images.length - 1}
              >
                <IoIosArrowForward />
              </button>
            </div>
          )}
        </div>
      </div>

      {isZoomed && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl p-2 z-50 hover:bg-white/20 rounded-full"
            onClick={() => setIsZoomed(false)}
          >
            <FaTimes />
          </button>
          
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white text-3xl p-2 hover:bg-white/20 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  changeImage("prev");
                }}
                disabled={activeIndex === 0}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="absolute right-4 text-white text-3xl p-2 hover:bg-white/20 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  changeImage("next");
                }}
                disabled={activeIndex === images.length - 1}
              >
                <IoIosArrowForward />
              </button>
            </>
          )}
          
          <img
            src={currentImageUrl}
            alt={productName || 'Product'}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProductGallery;

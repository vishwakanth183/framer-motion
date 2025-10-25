import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CouroselStyle from './imageCourosel.module.css'

interface ImageCarouselProps {
  images: string[];
  showLink? : any
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, showLink }) => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const handleIconClick = () => {
    // Navigation to be implemented later
    console.log("SVG icon clicked!");
  };

  return (
    <div style={{ position: "relative" }}>
      {/* SVG Icon at top-right */}
      {showLink && <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        {/* Example SVG icon: replace with your own */}
        <Link href={showLink} target="_blank"><img src="/SVG/shareicon.svg" style={{backgroundColor:"coral", height:'25px', width:'25px', borderRadius:"50%", padding:"1px"}}/></Link>
      </div>}

      {/* Inner Image Carousel */}
      <Carousel
        responsive={responsive}
        arrows
        showDots={true}
        dotListClass={CouroselStyle?.dotListClass}
        infinite={true}
        autoPlay={false}
        className="inner-image-carousel"
        itemClass="inner-carousel-item"
      >
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`project-img-${index}`}
              style={{
                height: 200,
                width: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

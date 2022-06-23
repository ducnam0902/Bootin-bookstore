import { slide1, slide2, slide3 } from "@bootin/assets/image";
import { Carousel, CarouselIndicators, CarouselItem } from "reactstrap";
import { useState } from "react";
import cn from "classnames";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: slide1,
      altText: "Slide One",
      collection: "Collection Book 2019",
      salesDescription: "40% discount on books by Susan Merrill",
      shopButton: "Shop Now",
    },
    {
      src: slide2,
      altText: "Slide Two",
      collection: "Collection Book 2020",
      salesDescription: "40% discount on books by Susan Merrill",
      shopButton: "Shop Now",
    },
    {
      src: slide3,
      altText: "Slide Three",
      collection: "Collection Book 2021",
      salesDescription: "40% discount on books by Susan Merrill",
      shopButton: "Shop Now",
      lastItem: true,
    },
  ];

  const itemLength = items.length - 1;

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
        className="slide"
        appear
      >
        <img className="sildeImage" src={item.src} />
        <div
          className={cn({
            slideCaption: true,
            slideLast: item.lastItem,
          })}
        >
          <div className="slideColection">{item.collection}</div>
          <div className="slideDescription">{item.salesDescription}</div>
          <button className="shopButton">{item.shopButton}</button>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
          className="slideIndicator"
        />
        {carouselItemData}
      </Carousel>
    </div>
  );
};

Slide.propTypes = {};

export default Slide;

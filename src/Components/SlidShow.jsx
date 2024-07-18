import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JobCard from "./JobCard";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";

export default function SlidShow() {
  const size = useWindowSize();

  const getCenterSlidePercentage = () => {
    if (size.width <= 640) return 100; // Mobile devices
    if (size.width <= 1024) return 50; // Tablets
    return 30; // Desktops
  };
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      infiniteLoop={8}
      showIndicators={false}
      useKeyboardArrows={true}
      autoPlay={true}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={getCenterSlidePercentage()}
      emulateTouch={true}
      transitionTime="900"
      stopOnHover={true}
      interval="1000"
      className="mb-5"
    >
      <div>
        <JobCard
          img="https://jonathangreen.b-cdn.net/wp-content/uploads/New-Jersey-Lawn-Grown-Fast-Grow-Grass-Seed-768x768.jpeg"
          title="Need to cut grass"
          info="Finding someone to trim the home garden"
          pay="5000"
        />
      </div>
      <div>
        <JobCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41T5LDSzvl9yWptv-woTER9VuCe2ppG7umg&s"
          title="UI/UX designer"
          info="Create a wireframe and the prototype for a research project website"
          pay="5500"
        />
      </div>
      <div>
        <JobCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjJ3df63cNQtM953JfOZL_x2BE1EIZUfZ6A&s"
          title="Social Media Manager"
          info="Manage and create content for a startup's social media accounts, including Facebook, Instagram, and Twitter."
          pay="6000"
        />
      </div>
      <div>
        <JobCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdD-zAflEbWd1umyK5vYhP69M5JcaRvcqDYw&s"
          title="Dog Walker"
          info="Walk and exercise a friendly dog in the neighborhood for an hour each day."
          pay="1000"
        />
      </div>
      <div>
        <JobCard
          img="https://www.supermarketnews.com/sites/supermarketnews.com/files/busyconsumers_0.jpg"
          title="Grocery Shopper"
          info="Shop for groceries and deliver them to an elderly person's home."
          pay="1200"
        />
      </div>
    </Carousel>
  );
}

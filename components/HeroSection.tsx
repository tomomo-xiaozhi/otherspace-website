"use client"; // this is a client component
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home" className="custom-image bg-cover">
      <div className="flex flex-col items-center text-center justify-center items-center mt-8 hero">
        <div className="border-white border-2 p-2 mt-100 mb-20 text-white font-bold">
          OUR OFFERS
        </div>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-white" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

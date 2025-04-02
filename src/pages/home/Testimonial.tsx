import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imageOne from "../../assets/imageOne.jpeg";
import imageTwo from "../../assets/imageTwo.jpeg";

const images = [
  { src: imageOne, title: "This is first image" },
  { src: imageTwo, title: "This is second image" },
  { src: imageOne, title: "This is third image" },
  { src: imageTwo, title: "This is fourth image" },
  { src: imageOne, title: "This is fifth image" },
  { src: imageTwo, title: "This is sixth image" },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const totalCards = images.length;

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); 
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); 
      } else {
        setVisibleCards(4); 
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalCards - visibleCards) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center pb-20 w-full max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Affordable telemedicine health service</h2>
        <p className="pt-2 text-md font-medium">
          Sebaghar is committed to serving telemedicine service in the whole Bangladesh
        </p>
        <p className="pt-2 text-md font-medium">Our service is open for doctor and patient 24/7</p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={`min-w-[100%] sm:min-w-[40%] md:min-w-[25%] p-2`}>
              <div className="border group relative">
                <Link to="/blog">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-[260px] w-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <h3 className="absolute inset-0 flex items-center justify-center bg-red-700 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 cursor-pointer top-[60%] md:top-[55%] transform -translate-y-1/2 p-3 bg-black text-white disabled:opacity-50"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        className="absolute right-2 cursor-pointer top-[60%] md:top-[55%] transform -translate-y-1/2 p-3 bg-black text-white disabled:opacity-50"
        onClick={nextSlide}
        disabled={currentIndex >= totalCards - visibleCards}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;

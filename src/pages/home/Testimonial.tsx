import Articale from "./Articale";

const TestimonialCarousel = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pb-20 w-full max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Affordable telemedicine health service
        </h2>
        <p className="pt-2 text-md font-medium">
          Sebaghar is committed to serving telemedicine service in the whole
          Bangladesh
        </p>
        <p className="pt-2 text-md font-medium">
          Our service is open for doctor and patient 24/7
        </p>
      </div>
      {/* Carousel Wrapper */}
      <div>
        <Articale />
      </div>
    </div>
  );
};

export default TestimonialCarousel;

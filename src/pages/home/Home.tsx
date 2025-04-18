import Banner from "./Banner";
// import Details from "./Details";
import HeroCard from "./HeroCard";
import Slider from "./Slider";
// import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className=" pb-20">
        <HeroCard />
      </div>
      {/* <Testimonial /> */}
      <div className="md:pb-[900px] pb-[700px]">
      <Slider />
      </div>
      {/* <div className="pt-[900px]">
        <Details />
      </div> */}
    </div>
  );
};

export default Home;

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
      <Slider />
      {/* <div className="pt-[900px]">
        <Details />
      </div> */}
    </div>
  );
};

export default Home;

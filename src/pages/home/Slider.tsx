import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import bkash from "../../assets/slider/bkash.png";
import nrbBank from "../../assets/slider/nrbbank.png";
import primeBank from "../../assets/slider/primebank.jpg";
import selcommerce from "../../assets/slider/selcommarce.png";
import masterCard from "../../assets/slider/mastercard.jpg";
import estrnBank from "../../assets/slider/estarnbank.png";
const partners = [bkash, nrbBank, primeBank, selcommerce, masterCard, estrnBank];

import amadersomoy from "../../assets/slider/amadersomoy.jpg";
import bussiness from "../../assets/slider/bussinesspost.png";
import chaneli from "../../assets/slider/channeli.png";
import dailyobserver from "../../assets/slider/dailyobserver.jpg";
import deshrupantor from "../../assets/slider/deshrupantor.png";
import jagonews from "../../assets/slider/jagonews24.webp";
const medias = [amadersomoy,bussiness,chaneli,dailyobserver,deshrupantor,jagonews];

const Slider = () => {
  return (
    <div className="absolute right-0 bg-[#F5F9FF] w-full md:h-[900px] flex py-10">
      <div className="max-w-screen-xl container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center pt-9 mb-16">Strategic Partner</h1>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={partner} alt="partner-logo" className="w-[200px] h-[100px]" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <h1 className='text-2xl font-bold text-center pt-32'>Media coverage</h1>
          <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {medias.map((media, index) => (
            <SwiperSlide key={index} className="flex justify-center pt-24">
              <img src={media} alt="media-logo" className="w-[200px] h-[100px]" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;

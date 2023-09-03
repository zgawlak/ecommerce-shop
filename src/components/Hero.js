import React from 'react';
import WomanImg from '../img/woman-hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-900 mr-3"></div>NEW 2023
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            HOME & FASHION<br />
            <span className="font-semibold">AUTUMN</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary transition duration-300 ease-in-out hover:border-transparent">
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

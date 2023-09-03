import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="bg-primary py-12">
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h2 className="font-semibold text-lg text-white mb-2">Subscribe to our newsletter</h2>
      <div>
        <input type="email" className="p-1 w-full md:w-[250px]" placeholder="your@email.com"></input>
        <button type="button" className="p-1 mt-2 w-full md:w-[80px] md:ml-1 bg-orange-200 text-primary">Submit</button>
      </div>
    </div>
    <div className="container mx-auto p-5 mt-5 flex text-white justify-center gap-x-4 flex-wrap items-center">
      <Link to="/">About</Link> &#8226;
      <Link to="/">Store Locator</Link> &#8226;
      <Link to="/">FAQ</Link> &#8226;
      <Link to="/">News</Link> &#8226;
      <Link to="/">Careers</Link> &#8226;
      <Link to="/">Contact Us</Link>
    </div>
  </footer>;
};

export default Footer;

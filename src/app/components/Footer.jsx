import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className='text-4xl md:text-6xl mb-6 text-primary text-orange-500 font-PTSans font-bold'>Boundless</h1>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Phone No. 8178462485  |  Email :  boundelessmyh@gmail.com
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap flex-col md:flex-row items-top mb-6">
              <div className="my-4 lg:my-0 md:mx-auto">
                <span className="block uppercase text-white text-lg mb-2 font-bold">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm">Home</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1bqpR2Obe3Jl1HlTGuw-Xp-i0DDYL3V_r/view?usp=sharing" className="text-white hover:text-white font-semibold block pb-2 text-sm">Our Story</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm">Contact Us</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm" href="/JPIC Guidelines & Rules.pdf">Advertise</a>
                  </li>
                </ul>
              </div>
              <div className="my-4 lg:my-0 md:mx-auto">
                <span className="block uppercase text-lg font-bold text-white mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm">MIT License</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-white font-semibold block pb-2 text-sm">Others</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © <span id="get-current-year">Boundless</span>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

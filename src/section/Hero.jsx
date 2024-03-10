import React from "react";
import { logo } from "../assets/images";
import { navLinks, socialLink } from "../constants";

const Hero = () => {
  return (
    <section className="max-container flex flex-col">
      <img
        className="mb-24"
        src={logo}
        alt=""
        srcset=""
        width={118}
        height={56.9}
      />
      <div className=" max-w-[950px] flex  flex-row justify-between gap-14 flex-wrap leading=[32px]">
        <ul className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <li className="flex flex-row gap-3">
              <div className=" w-6 flex justify-center items-center">
                <img src={item.icon} alt="" srcset="" />
              </div>
              <p>
                <a href={item.herf}>{item.label}</a>
              </p>
            </li>
          ))}
        </ul>
        <div className="m max-w-[576px]  flex flex-col items-center gap-10">
          <p className="text-base t text-center">
            A leading technology and electronics goods merchant and wholesale
            distributor providing the latest solutions and services with
            exceptional partner experience to resellers, retailers, corporate
            businesses, and government entities
          </p>
          <div className="px-6 py-3 rounded-lg max-w-[291px] border-solid border-2 border-primary">
            <p className="text-sm font-bold">GET YOU QUOTE NOW</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-ss mb-5">Connect with us</p>

        <ul className="flex flex-row flex-wrap">
          {socialLink.map((item) => (
            <li className="flex gap-3 mr-11 flex">
              <img width={25} height={25} src={item.icon} alt="" srcset="" />
              <p className="text-ss">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;

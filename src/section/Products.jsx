import React from "react";
import { products } from "../constants";

const Products = () => {
  return (
    <section className="max-container">
      <p className="  font-montserrat text-xl font-semibold text-center">
        Lorem Ipsum is simply dummy text
      </p>
      <p className="max-w-[918px] text-sm text-center m-auto">
        There are strong reasons that clients choose Blue Dot Global over the
        competition. Our strengths go beyond being just an electronic goods
        merchant wholesaler and distributor and a few of them are listed here.
      </p>
      <div className="flex flex-wrap justify-between mt-24 mb-10  gap-y-24">
        {products.map((item) => (
          <div className="flex flex-col w-[280px] ">
            <img className="w-full mb-2.5 rounded-t-md" src={item.icon} alt="" />
            <p className="w-full py-2 mb-7  font-montserrat font-semibold text-center text-base bg-primary text-secondary">{item.heading}</p>

            <p>{
                item.label.map((item)=>(
                    <span className="text-sm leading-[27px]">{item}<br/> </span>
                ))
                }</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

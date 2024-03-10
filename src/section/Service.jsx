import { globalicon } from "../assets/images";
import { ps, serviceS } from "../constants";

const Service = () => {
  return (
    <section className="max-container flex justify-between max-md:flex-col">
      <div className="s-left mr-6 w-full ">
        <div className="flex justify-between  ">
          <div className="flex flex-col  justify-between">
            <p className="font-montserrat text-xl max-w-[431px] mb-11 font-semibold">
              We connect people with technology that makes life better
            </p>
            <p className="text-sm leading-7 max-w-[480px]">
              Discover how we help you achieve your strategic goals. We combine
              power of people and technology to address your biggest
              opportunities - from improving client experience and incresaing
              effeciency to growing revenue
            </p>
          </div>
          <div className="flex flex-col items-center  text-center  max-w-[500px]">
            <p className="mb-3 text-ss ">Global Coverage</p>
            <img className="mb-2 text-ss" src={globalicon} alt="" />
            <p className="max-w-[500px] mb-4 text-ss">International offices</p>
            <div className="bg-primary text-secondary text-center px-4 py-3 rounded-xl text-ss">
              <p>UAE</p>
              <p>India</p>
              <p>Pakistan</p>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <p className="px-10 mb-12 font-semibold text-base   w-fit bg-primary text-secondary">Product Specialization</p>
          <div className="flex flex-wrap gap-x-2 gap-y-7 justify-between">
            {ps.map((item) => (
              <div className="lg:w-[13%] gap-y-2 flex flex-col align-middle">
                <img className="object-contain h-[45px]" src={item.icon} alt="" />
                <p className="font- text-[16px]  text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="s-right min-w-[35%] max-md:mt-12 max-md:m-auto ">
        <p className="text-base font-semibold mb-5 text-center">
          Service Specialization
        </p>
        <div className="w-full max-md:w-fit   border-solid border-primary border-[1px] rounded-[90px] p-10">
          <ul className="flex flex-col justify-center items-center">
            {serviceS.map((item, index) => (
              <li
                className="text-center font-normal te text-sm leading-7"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;

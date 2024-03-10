import { moreSimg } from "../assets/images";
import { msIcons } from "../constants";

const MoreService = () => {
  return (
    <section className="max-container flex flex-col">
      <div className="flex  max-md:flex-col items-center">
        <div className="flex-1">
          <img className="w-full" src={moreSimg} alt="" />
        </div>
        <div className="flex-1">
          <p className="font-montserrat text-xl font-semibold mb-8">
            Real outcomes and expert insights A better way to buy IT
          </p>
          <p className="text-sm mb-8">
            Blue Dot Global is making a strong mark in the distribution of
            digital and electronic products, technological transformations, and
            system Integrations which started from the UAE and now expanded to
            supplying our product ranges in the Middle East, Africa, Asia, and
            Europe.
          </p>
          <p className="font-sm mb-8">
            We simplify and streamline your technology procurement processes.
            We’ve made buying the tech you need easier than ever. Your ingenuity
            is what turns imagination into innovation. We give you access to the
            components you need to breathe life into your vision.
          </p>
          <p className="font-sm">
            We work with you with a deep-level understanding of your business
            needs, extensive technical knowledge, and highly capable delivery
            teams.
          </p>
        </div>
      </div>
      <div className="mt-20 flex  max-md:flex-col  max-md">
        <div className="flex flex-col  max-md:items-center">
          <p className="font-montserrat text-xl mb-8 font-semibold  max-md:text-center">
            Industry <br />
            expertise
          </p>
          <p className="max-w-[395px] text-sm  max-md:text-center">
            We are one the leading business and technology consultancy and
            implementation experts building bridges between its clients'
            business goals and ecological capabilities
          </p>
        </div>
        <div className="bg-secondary max-md:mt-20 max-md:ml-0  max-md:flex-wrap rounded-[35px] ml-10 gap-y-8 py-10 flex flex-row flex-wrap justify-center max-w-[822px]">
          {msIcons.map((item, index) => (
            <div
              key={index}
              className="w-[16%]  max-md:w-[100px] flex flex-col items-center"
            >
              <img
                src={item.icon}
                className="mb-2 h-[38px] object-cover"
                alt=""
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreService;

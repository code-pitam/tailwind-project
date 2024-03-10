import { menu1 } from "./assets/images";
import Hero from "./section/Hero";
import Service from "./section/Service";
import Subhero from "./section/Subhero";

const App = () => {
  return (
    <main className="relative bg-secondary text-primary">
      <section className="padding-x pt-9 pb-12 border-solid border-2  border-black">

        <Hero/>
      </section>
      <section className="padding-x pt-14 pb-16   border-solid border-2  border-black">
        <Subhero/>
      </section>
      <section className="padding-x pt-24 pb-28   border-solid border-2  border-black">
        Slider
      </section>
      <section className="padding-x pt-24 pb-20   border-solid border-2  border-black">
        <Service/>
      </section>
      <section className="padding-x pt-24 pb-20   border-solid border-2  border-black">
        MoreService
      </section>
      <section className="padding-x pt-20 pb-16   border-solid border-2  border-black">
        Products
      </section>
      <section className="padding-x pt-12 pb-28   border-solid border-2  border-black">
        Parters
      </section>
      <section className="padding-x pt-9 pb-12   border-solid border-2  border-black">
        careers
      </section>
      <section className="padding-x pt-16   border-solid border-2  border-black">
        Footer
      </section>
    </main>
  );
};

export default App;

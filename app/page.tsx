import Image from "next/image";

import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { ComparisonMadeEasy } from "@/components/comparison-made-easy";
import { WhyCompareWithUs } from "@/components/why-compare-with-us";

import routerSvg from "../public/images/router-primary-sm.svg";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    // max-w-5xl
    <section className="flex flex-col">
      <Banner />
      <Services />
      <ComparisonMadeEasy />
      <WhyCompareWithUs />
      <Contact />

      {/* <div className="hover-card">
        <div className="face face1">
          <div className="content">
            <Image src={routerSvg} alt={"item.alt"} />
            <h3>Design</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

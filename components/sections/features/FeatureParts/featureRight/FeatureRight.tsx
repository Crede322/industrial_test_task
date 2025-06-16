import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import FeatureRightList from "./FeatureRightList";
import FeatureListMobile from "../FeatureListMobile";

interface Props {
  children: ReactNode[];
  imageName: string;
  filterOff?: boolean;
}

const FeatureRight = ({ children, imageName, filterOff }: Props) => {
  const [title, ...list] = React.Children.toArray(children);

  return (
    <div className="relative min-[1150px]:absolute bottom-0 right-0 block mx-auto">
      <article className="relative w-[90vw] max-w-[500px] aspect-[1/1] flex justify-center border-4 border-light-cyan mx-auto min-[1080px]:mr-auto min-[1080px]:ml-0 pt-[5%] min-[768px]:pt-[50px] z-3">
        <div className="uppercase relative z-6 text-orange filter-five-orange title3 text-center">
          {title}
        </div>
        <div
          className={`absolute inset-0 w-full h-full z-5 ${
            !filterOff ? "glow-blue" : ""
          }`}
        >
          <Image
            src={`/images/features/${imageName}`}
            alt="feature"
            width={500}
            height={500}
          />
        </div>
        <Image src="/images/featureBg.svg" fill alt="" />
      </article>
      <div className="bg-fadecyan absolute left-[-100px] bottom-[29px] w-[110px] h-[3px] rotate-[32deg] z-[-1] hidden min-[1150px]:block" />
      <FeatureRightList>{list}</FeatureRightList>
      <FeatureListMobile>{list}</FeatureListMobile>
    </div>
  );
};

export default FeatureRight;

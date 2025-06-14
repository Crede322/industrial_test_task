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
    <div className="min-[1150px]:absolute bottom-0 right-0 block mx-auto">
      <article className="relative w-[90vw] max-w-[500px] aspect-[1/1] flex justify-center border-4 border-light-cyan mx-auto min-[1080px]:mr-auto min-[1080px]:ml-0 pt-[5%] min-[768px]:pt-[50px]">
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
        <FeatureRightList>{list}</FeatureRightList>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,transparent_0%,#000_100%)] z-4"></div>
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,#931022,transparent)] z-3"></div>
        <div className="absolute inset-0 opacity-100 bg-[linear-gradient(to_top,#180526,transparent)] z-2"></div>
        <div className="absolute inset-0 opacity-40 bg-[#2e7cb9] z-1"></div>
      </article>
      <FeatureListMobile>{list}</FeatureListMobile>
    </div>
  );
};

export default FeatureRight;

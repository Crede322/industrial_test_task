import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import FeatureLeftList from "./FeatureLeftList";
import FeatureListMobile from "../FeatureListMobile";

interface Props {
  children: ReactNode[];
  imageName: string;
  filterOff?: boolean;
}

const FeatureLeft = ({ children, imageName, filterOff }: Props) => {
  const [title, ...list] = React.Children.toArray(children);

  return (
    <div className="relative mx-auto min-[1080px]:ml-0 bg">
      <article className="relative w-[90vw] max-w-[500px] aspect-[1/1] flex justify-center border-4 border-light-cyan mx-auto min-[1080px]:mr-auto min-[1080px]:ml-0 pt-[5%] min-[768px]:pt-[50px] z-2">
        <div className="uppercase relative z-6 text-orange filter-five-orange title3 text-center">
          {title}
        </div>
        <div
          className={`absolute inset-0 w-full h-full z-5 ${
            !filterOff ? "glow-blue" : ""
          }`}
        >
          <Image src={`/images/features/${imageName}`} alt="feature" fill />
        </div>
        <Image src="/images/featureBg.svg" fill alt="" />
      </article>
      <div className="bg-fadecyan absolute right-[-100px] top-[29px] w-[110px] h-[3px] rotate-[32deg] z-[-1] hidden min-[1150px]:block" />
      <FeatureLeftList>{list}</FeatureLeftList>
      <FeatureListMobile>{list}</FeatureListMobile>
    </div>
  );
};

export default FeatureLeft;

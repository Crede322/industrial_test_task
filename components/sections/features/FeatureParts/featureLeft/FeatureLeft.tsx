import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import FeatureLeftList from "./FeatureLeftList";

interface Props {
  children: ReactNode[];
  imageName: string;
  filterOff?: boolean;
}

const FeatureLeft = ({ children, imageName, filterOff }: Props) => {
  const [title, ...list] = React.Children.toArray(children);

  return (
    <article className="relative flex justify-center border-4 border-light-cyan w-[500px] h-[500px] pt-[50px]">
      <div className="uppercase relative z-6 text-orange filter-five-orange title3 text-center">
        {title}
      </div>
      <div
        className={`absolute inset-0 w-full h-full z-5  ${
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
      <FeatureLeftList>{list}</FeatureLeftList>
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,transparent_0%,#000_100%)] z-4"></div>
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,#931022,transparent)] z-3"></div>
      <div className="absolute inset-0 opacity-100 bg-[linear-gradient(to_top,#180526,transparent)] z-2"></div>
      <div className="absolute inset-0 opacity-40 bg-[#2e7cb9] z-1"></div>
    </article>
  );
};

export default FeatureLeft;

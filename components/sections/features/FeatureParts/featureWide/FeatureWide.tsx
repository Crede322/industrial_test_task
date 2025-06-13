import React from "react";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
  bgImageName: string;
  mainImageName: string;
  textH3: string;
  textH4: string;
  filterOff?: boolean;
}

const FeatureWide = ({
  children,
  bgImageName,
  mainImageName,
  textH3,
  textH4,
  filterOff,
}: Props) => {
  return (
    <article className="relative px-[28px] py-[20px] min-h-[500px] w-full max-w-[97vw] mx-auto bg-fadecyan gradient-border2 border-[6px] ">
      <h3 className="uppercase title2 text-cyan filter-five-blue text-[2.5rem] mb-[20px] relative z-3">
        {textH3}
      </h3>
      <h4 className="text2 text-white filter-text-darkbottom text-[1.25rem] relative z-3">
        {textH4}
      </h4>
      <ol className="list-[square] pl-[60px] pt-[40px] relative z-3">
        {React.Children.map(children, (child, index) => (
          <li className="text-cyan text2 filter-text-darkbottom" key={index}>
            {child}
          </li>
        ))}
      </ol>
      <Image
        src={`/images/features/${mainImageName}`}
        alt="armours"
        fill
        className={`z-2 ${!filterOff ? "glow-blue" : ""}`}
      />
      <Image
        src={`/images/features/${bgImageName}`}
        alt=""
        fill
        className="z-1"
      />
      <div className="absolute z-0 inset-0 bg-gradient-to-t from-[#0f291f] to-transparent opacity-50" />
    </article>
  );
};

export default FeatureWide;

import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
  bgImageName: string;
  mainImageName: string;
  textH3: string;
  textH4: string;
}

const FeatureWide = ({
  children,
  bgImageName,
  mainImageName,
  textH3,
  textH4,
}: Props) => {
  return (
    <article className="relative px-[28px] py-[20px] min-h-[500px] w-full bg-fadecyan gradient-border2 border-[6px]">
      <h3 className="uppercase title2 text-cyan text-shadow-blue text-[2.5rem] mb-[20px]">
        {textH3}
      </h3>
      <h4 className="text2 text-white text-[1.25rem]">{textH4}</h4>
      {children}
      <Image
        src={`/images/features/${mainImageName}`}
        alt="armours"
        fill
        className="z-2"
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

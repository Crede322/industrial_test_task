import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
  bgImageName: string;
}

const OverviewCard = ({ children, bgImageName }: Props) => {
  return (
    <article className="w-[75vw] min-[768px]:w-[50vw] min-[1360px]:min-w-[350px] max-w-[360px] aspect-[125/166] relative">
      <Image
        src={`/images/sectionOverview/${bgImageName}`}
        fill
        alt={bgImageName}
      />
      {children}
    </article>
  );
};

export default OverviewCard;

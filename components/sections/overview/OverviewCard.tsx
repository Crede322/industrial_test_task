import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const OverviewCard = ({ title, children }: Props) => {
  return (
    <article className="w-[350px] h-[480px] relative border-[2px] border-black">
      <div className="absolute bottom-0 w-full h-[70px] flex items-center justify-start pl-[10px] bg-fadeblue z-10 text-white">
        <p className="font-minecraft-rus filter-text-common">{title}</p>
      </div>
      {children}
    </article>
  );
};

export default OverviewCard;

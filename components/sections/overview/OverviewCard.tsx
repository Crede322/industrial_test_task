import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const OverviewCard = ({ title, children }: Props) => {
  return (
    // <article className="min-[1360px]:w-[350px] min-[560px]:w-[70vw] min-[650px]:w-[60vw] min-[800px]:w-[40vw] w-[90vw] aspect-[35/48] relative border-[2px] border-black">
    <article className="w-[100%] min-[500px]:w-[60%] min-[830px]:w-[50%] min-[1000px]:w-[40%] min-[1280px]:w-[30%] min-[1600]:min-w-[444px] aspect-[35/48] relative flex justify-center">
      <div className="border-[2px] border-black h-[100%] w-[78%] z-6">
        <div className="w-[78%] h-full absolute left-1/2 -translate-x-1/2">
          {children}
        </div>
        <div className="w-[78%] h-[70px] pl-[10px] bg-fadeblue z-10 text-white flex items-center absolute bottom-0 left-1/2 -translate-x-1/2">
          <p className="font-minecraft-rus filter-text-common">{title}</p>
        </div>
      </div>
    </article>
  );
};

export default OverviewCard;

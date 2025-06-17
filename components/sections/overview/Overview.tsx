import OverviewCard from "./OverviewCard";
import Image from "next/image";

const Overview = () => {
  return (
    <section
      id="overview"
      className="min-h-[100vh] pt-[5vh] min-[768px]:pt-[20vh] pb-[20px] min-[768px]:py-[20vh] flex flex-row items-center relative"
    >
      <div className="flex flex-col min-[1360px]:flex-row justify-center items-center gap-x-[80px] gap-y-[40px] mx-auto w-[97vw]">
        <OverviewCard bgImageName="overviewCard1bg.png">
          <div className="relative w-[10%] right-[9.2%] top-[0.1%] h-full">
            <Image
              src="/images/sectionOverview/overviewCard1fg.png"
              className="absolute"
              fill
              alt=""
            />
          </div>
        </OverviewCard>
        <OverviewCard bgImageName="overviewCard2bg.png">
          <div className="relative h-full transform scale-x-[1.28] scale-y-[1.27] top-[-1.1%] left-[1.5%]">
            <Image
              src="/images/sectionOverview/overviewCard2fg.svg"
              className="absolute"
              fill
              alt=""
            />
          </div>
        </OverviewCard>
        <OverviewCard bgImageName="overviewCard3bg.png">
          <div className="relative w-[10%] left-[99.3%] top-[-0.21%] h-full">
            <Image
              src="/images/sectionOverview/overviewCard3fg.png"
              className="absolute"
              fill
              alt=""
            />
          </div>
        </OverviewCard>
      </div>
    </section>
  );
};

export default Overview;

import OverviewCard from "./OverviewCard";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="min-h-[100vh] py-[20vh] section-divided-bottom flex flex-row items-center relative">
      <div className="flex flex-col items-center min-[1600px]:grid gap-[80px] grid-cols-1 min-[1600px]:grid-cols-3 mx-auto w-[97vw] min-[1600px]:w-fit">
        <OverviewCard title="Новейшая версия Minecraft">
          <Image
            src="/images/sectionOverview/overviewCard1.webp"
            alt="overview card 1"
            className="absolute border-2 min-w-[109%] left-1/2 -translate-x-[8%]"
            fill
          />
        </OverviewCard>
        <OverviewCard title="Новейшая версия Minecraft">
          <Image
            src="/images/sectionOverview/overviewCard2.webp"
            alt="overview card 2"
            className="absolute border-2 min-w-[126%] left-1/2 -translate-x-[9.2%]"
            fill
          />
        </OverviewCard>
        <OverviewCard title="Новейшая версия Minecraft">
          <Image
            src="/images/sectionOverview/overviewCard3.webp"
            alt="overview card 3"
            className="absolute border-2 min-w-[115%] left-1/2 -translate-x-[0.3%]"
            fill
          />
        </OverviewCard>
      </div>
    </section>
  );
};

export default Overview;

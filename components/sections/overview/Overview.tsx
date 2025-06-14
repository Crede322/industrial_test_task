import OverviewCard from "./OverviewCard";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="min-h-[100vh] py-[20vh] section-divided-bottom flex flex-row items-center relative">
      <div className="flex flex-col items-center gap-y-[40px] min-[1220px]:grid grid-cols-1 min-[1220px]:grid-cols-3 mx-auto w-[97vw] min-[1220px]:w-[1400px] max-w-[1400px]">
        <OverviewCard title="Новейшая версия Minecraft">
          <Image
            src="/images/sectionOverview/overviewCard1.webp"
            alt="overview card 1"
            className="absolute border-2 min-w-[109%] left-1/2 -translate-x-[8%]"
            fill
          />
        </OverviewCard>
        <OverviewCard title="Комфортное прохождение">
          <Image
            src="/images/sectionOverview/overviewCard2.webp"
            alt="overview card 2"
            className="absolute border-2 min-w-[126%] left-1/2 -translate-x-[9.2%]"
            fill
          />
        </OverviewCard>
        <OverviewCard title="Уникальный мод McTech">
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

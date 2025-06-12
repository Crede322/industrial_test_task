import OverviewCard from "./OverviewCard";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="h-[100vh] flex items-center">
      <div className="grid gap-[80px] grid-cols-3 mx-auto w-fit">
        <OverviewCard title="Новейшая версия Minecraft">
          <div className="w-[375px] h-full absolute right-0">
            <Image
              src="/images/sectionOverview/overviewCard1.webp"
              alt="overview card 1"
              fill
            />
          </div>
        </OverviewCard>
        <OverviewCard title="Комфортное прохождение">
          <div className="w-[438] h-[105%] absolute left-[-41px] top-[-14px] overflow-visible">
            <Image
              src="/images/sectionOverview/overviewCard2.webp"
              alt="overview card 2"
              className="object-contain"
              fill
            />
          </div>
        </OverviewCard>
        <OverviewCard title="Уникальный мод McTech">
          <div className="w-[444] h-full absolute left-[-26px] overflow-visible">
            <Image
              src="/images/sectionOverview/overviewCard3.webp"
              alt="overview card 3"
              className="object-contain"
              fill
            />
          </div>
        </OverviewCard>
      </div>
    </section>
  );
};

export default Overview;

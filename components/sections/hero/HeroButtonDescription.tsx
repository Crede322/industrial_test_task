"use client";

const HeroButtonDescription = () => {
  const handleScroll = () => {
    const sectionOverview = document.getElementById("overview");
    sectionOverview?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="button-main button-details uppercase  text-orange text-shadow-orange text-shadow-dark w-[283] h-[56] text-[1.9rem] min-[768px]:text-[1.25rem] py-0 min-[768px]:py-[15px] px-0 min-[768px]:px-[66px]"
    >
      <p className="filter-five-orange mt-[-4px] ">Подробнее</p>
    </button>
  );
};

export default HeroButtonDescription;

"use client";

const HeroButtonDescription = () => {
  const handleScroll = () => {
    const sectionOverview = document.getElementById("overview");
    console.log(sectionOverview);
    sectionOverview?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="button-main button-details uppercase  text-orange text-shadow-orange text-shadow-dark w-[283] h-[56] text-[1.25rem] py-[15px] px-[66px]"
    >
      <p className="filter-five-orange mt-[-4px]">Подробнее</p>
    </button>
  );
};

export default HeroButtonDescription;

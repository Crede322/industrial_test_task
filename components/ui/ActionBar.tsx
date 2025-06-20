"use client";

const ActionBar = () => {
  const handleScroll = () => {
    const sectionHero = document.getElementById("hero");
    sectionHero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-[97vw] min-[1840px]:max-w-[1820px] mx-auto flex gap-[20px] min-[768px]:flex-row flex-col justify-between items-end min-[768px]:items-center min-[768px] sticky top-[80vh] min-[768px]:top-[88vh] z-10 pointer-events-none">
      <button onClick={handleScroll} className="actionbar-button button-main">
        <p>Наверх</p>
      </button>
      <a target="_blank" href="https://mcskill.net/start">
        <button className="actionbar-button button-main">
          <p>Начать играть</p>
        </button>
      </a>
    </div>
  );
};

export default ActionBar;

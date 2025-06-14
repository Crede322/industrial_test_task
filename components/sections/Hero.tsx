import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mx-auto min-h-[1080px] h-[100vh] relative">
      <div className="h-full flex flex-col gap-[50px] min-[1024px]:gap-[150px] items-center justify-top min-[640px]:pt-[17vh] min-[1400px]:pt-[250px] pt-[30vh] pb-[81px] relative z-6">
        <div className="w-[96vw] min-[1024px]:w-[40vw] aspect-[6/3] max-w-[990px] max-h-[338px] relative">
          <Image src="/images/heroImg.webp" alt="title" fill />
        </div>
        <div className="flex flex-col items-center">
          <p className="title-digits filter-five-orange text-orange text-[40px] mb-[20px]">
            1:23:59:59
          </p>
          <a target="_blank" href="https://mcskill.net/start">
            <button className="button-main max-w-[90vw] w-[500] h-[100] text-[2rem] py-[27px] min-[768px]:px-[96px] mb-[20px]">
              <p className="filter-five-blue">Начать играть</p>
            </button>
          </a>
          <button className="button-main uppercase  text-orange text-shadow-orange text-shadow-dark w-[283] h-[56] text-[1.25rem] py-[15px] px-[66px]">
            <p className="filter-five-orange mt-[-4px]">Подробнее</p>
          </button>
        </div>
      </div>
      {/* background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan to-transparent opacity-[20%] z-3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f] z-4"></div>
      <div className="absolute inset-0 bg-black opacity-[0.5] z-2"></div>
      <div className="bg-grid absolute inset-0 z-4"></div>
      <div className="w-full absolute inset-0 bg-[url('/images/heroBg.webp')] bg-no-repeat bg-cover z-1"></div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import HeroButtonDescription from "./hero/HeroButtonDescription";
import HeroCountdown from "./hero/HeroCountdown";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full mx-auto min-[1080px]:min-h-[1080px] h-[100vh] relative"
    >
      <div className="h-full flex flex-col gap-[50px] min-[1024px]:gap-[50px] min-[1600px]:gap-[150px] items-center justify-top min-[640px]:pt-[17vh] min-[1400px]:pt-[250px] pt-[30vh] pb-[81px] relative z-6">
        <div className="w-[96vw] min-[1024px]:w-[40vw] min-[1600px]:w-[60vw] aspect-[3/1] min-[1024px]:aspect-[3/1] max-w-[990px] max-h-[338px] relative">
          <Image src="/images/heroImg.webp" alt="title" fill />
        </div>
        <div className="flex flex-col items-center">
          <HeroCountdown />
          <a
            className="mb-[20px]"
            target="_blank"
            href="https://mcskill.net/start"
          >
            <button className="button-main button-start max-w-[90vw] w-[500] h-[100] text-[2rem] py-[27px] min-[768px]:px-[96px]">
              <p className="filter-five-blue">Начать играть</p>
            </button>
          </a>
          <HeroButtonDescription />
        </div>
        {/* ----------------- hidden h1 ---------------*/}
        <h1 className="opacity-0">Сервер McSkill Industrial Techno</h1>
        {/* ----------------- hidden h1 ---------------*/}
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

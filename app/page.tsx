import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/overview/Overview";
import Features1 from "@/components/sections/features/Features1";
import Features2 from "@/components/sections/features/Features2";
import Features3 from "@/components/sections/features/Features3";
import Features4 from "@/components/sections/features/Features4";
import Features5 from "@/components/sections/features/Features5";
import Features6 from "@/components/sections/features/Features6";
import Mods from "@/components/sections/mods/Mods";
import ActionBar from "@/components/ActionBar";

const Page = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <div className="relative">
        <div className="w-full  pt-[12vh]">
          <ActionBar />
          <div className="section-divider" />
          <Features1 />
          <Features2 />
          <Features3 />
          <Features4 />
          <Features5 />
          <Features6 />
          <Mods />
        </div>
      </div>
    </main>
  );
};

export default Page;

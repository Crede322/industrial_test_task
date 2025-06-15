import Image from "next/image";
import Mod from "./Mod";

const Mods = () => {
  return (
    <section>
      <div className="min-h-[100vh] py-[110px]">
        <div className="mx-auto border-l-[5px] w-[97vw] min-[1360px]:w-[1315px] border-r-[5px] h-fit px-[5px] border-white">
          <div className="border-[5px] h-[70px] mb-[4px] gradient-border2 bg-fadecyan flex items-center pl-[24px] title3">
            <p className="filter-five-orange text-orange text-[clamp(1.4rem,_4vw,_2.5rem)]">
              модификации сервера
            </p>
          </div>
          <div className="border-[5px] h-[100px] gradient-border3 bg-fadeorange flex items-center justify-center">
            <div className="flex items-center gap-[1%] min-[360px]:gap-[3%] min-[420px]:gap-[10%] min-[768px]:gap-[75px] w-[95%] min-[460px]:w-[80%] min-[1000px]:w-[51%]">
              <div className="relative h-[62px] w-[62px]">
                <Image
                  src="/images/helmet.png"
                  fill
                  alt="иллюстрация модлистов сервера"
                />
              </div>
              <p className="filter-five-orange text-orange heading-mods">
                McTechnologies
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 grid-rows-6 min-[1360px]:grid-cols-2 min-[1360px]:grid-rows-3 grid-flow-col gap-x-[20px] gap-y-[5px] mt-[10px]">
            <Mod imageName="Just_hammers.png" modName="JustHammers" />
            <Mod
              imageName="Applied_Energistics_2.webp"
              modName="Applied Energistics 2"
            />
            <Mod imageName="MEGA_Cells.png" modName="MEGA Cells" />
            <Mod
              imageName="Sophisticated_Backpacks.png"
              modName="Sophisticated Backpacks"
            />
            <Mod
              imageName="Sophisticated_Storage.png"
              modName="Sophisticated Storage"
            />
            <Mod imageName="Productive_Bees.png" modName="Productive Bees" />
          </ul>
          {/*-------------------------------- сетка 1 ---------------------------------*/}
          <div className="w-[82%] h-[6px] my-[10px] mx-auto gradient-bg1" />
          {/*-------------------------------- сетка 2 ---------------------------------*/}
          <ul className="grid grid-cols-1 min-[1360px]:grid-cols-2 grid-rows-18 min-[1360px]:grid-rows-9 grid-flow-col gap-x-[20px] gap-y-[5px] mt-[10px]">
            <Mod
              imageName="Yuushya_Townscape.png"
              modName="Yuushya Townscape"
            />
            <Mod
              imageName="Armourers_Workshop.jpeg"
              modName="Armourer's Workshop"
            />
            <Mod imageName="Xtones.png" modName="Xtones" />
            <Mod
              imageName="When_Dungeons_Arise.png"
              modName="When Dungeons Arise"
            />
            <Mod
              imageName="Yungs_better_nether_fortresses.png"
              modName="YUNG's Better Nether Fortresses"
            />
            <Mod
              imageName="ChoiceTheorem_Overhauled_Village.png"
              modName="ChoiceTheorem's Overhauled Village"
            />
            <Mod imageName="Biomes_o_Plenty.png" modName="Biomes O' Plenty" />
            <Mod
              imageName="Cosmetic_Armor_Reworked.png"
              modName="Cosmetic Armor Reworked"
            />
            <Mod imageName="Emojiful.png" modName="Emojiful" />
            <Mod imageName="Lootr.png" modName="Lootr" />
            <Mod imageName="Macaws_Bridges.jpeg" modName="Macaw's Bridges" />
            <Mod imageName="Macaws_Doors.jpeg" modName="Macaw's Doors" />
            <Mod
              imageName="Macaws_Fences_and_Walls.png"
              modName="Macaw's Fences and Walls"
            />
            <Mod
              imageName="Macaws_Lights_and_Lamps.png"
              modName="Macaw's Lights and Lamps"
            />
            <Mod imageName="Macaws_Paintings.png" modName="Macaw's Paintings" />
            <Mod imageName="Macaws_Roofs.jpeg" modName="Macaw's Roofs" />
            <Mod imageName="Macaws_Windows.png" modName="Macaw's Windows" />
            <Mod
              imageName="Formations_Overworld.gif"
              modName="Formations Overworld"
            />
          </ul>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default Mods;

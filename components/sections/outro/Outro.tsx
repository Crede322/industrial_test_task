import Image from "next/image";

const Outro = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[98vw] mx-auto">
        <div className="w-full h-fit pt-[170px] pb-[40px] max-w-[1850px] mx-auto relative z-1">
          <div className="w-[300px] max-w-[60vw] aspect-[1/1] relative mx-auto mb-[170px] heart-animation">
            <Image
              className="rotate-[-45deg]"
              src="images/footerImg.svg"
              fill
              alt="next team"
            />
          </div>
          <h3 className="w-fit mx-auto mb-[100px] title-footer text-center text-light-cyan filter-five-blue font-normal">
            Сервер, контент и эта презентация — плод труда команды MCSkill.
            <br />
            Спасибо, что играете с нами. Мы ценим каждого из вас!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Outro;

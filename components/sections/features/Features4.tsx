import FeatureWide from "./FeatureParts/featureWide/FeatureWide";

const Features4 = () => {
  return (
    <section>
      <div className="section-features">
        <div className="w-[1520px] flex justify-between">
          <FeatureWide
            bgImageName="featureWide2bg.webp"
            mainImageName="featureWide2main.webp"
            textH3="Солнечные панели"
            textH4="Пассивный источник энергии"
            filterOff={true}
          >
            <p>10 панелей</p>
            <p>5 мультипанелей</p>
            <p>6 типов улучшений для панелей</p>
          </FeatureWide>
        </div>
      </div>
    </section>
  );
};

export default Features4;

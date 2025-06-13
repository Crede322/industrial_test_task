import FeatureLeft from "./FeatureParts/featureLeft/FeatureLeft";
import FeatureRight from "./FeatureParts/featureRight/FeatureRight";

const Features6 = () => {
  return (
    <section>
      <div className="section-features flex flex-col items-center gap-[80px] py-[50px]">
        <div className="w-[1520px] flex justify-between">
          <FeatureLeft imageName="featureSmall11.webp" filterOff={true}>
            <h2>10 000 предметов кастомизации</h2>
            <p>Можно создавать свои скины</p>
          </FeatureLeft>
          <FeatureRight imageName="featureSmall12.webp" filterOff={true}>
            <h2>RPG мир</h2>
            <p>Имеются мобы</p>
            <p>
              <strong>PvE</strong> заработок монет
            </p>
            <p>Добыча ресурсов</p>
          </FeatureRight>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default Features6;

import FeatureLeft from "./FeatureParts/featureLeft/FeatureLeft";
import FeatureRight from "./FeatureParts/featureRight/FeatureRight";

const Features2 = () => {
  return (
    <section>
      <div className="section-features">
        <div className="feature-pair-container">
          <FeatureLeft imageName="featureSmall5.webp">
            <h2>
              Генераторы
              <br />
              Ресурсов
            </h2>
            <p>
              <strong>4</strong> типа генераторов
            </p>
            <p>
              <strong>5</strong> тиров генераторов
            </p>
          </FeatureLeft>
          <FeatureRight imageName="featureSmall6.webp">
            <h2>
              Бесконечные AE
              <br />
              ячейки
            </h2>
            <p>
              <strong>17</strong> типов ресурсов
            </p>
          </FeatureRight>
        </div>
      </div>
    </section>
  );
};

export default Features2;

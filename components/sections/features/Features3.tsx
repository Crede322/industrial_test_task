import FeatureLeft from "./FeatureParts/featureLeft/FeatureLeft";
import FeatureRight from "./FeatureParts/featureRight/FeatureRight";

const Features3 = () => {
  return (
    <section>
      <div className="section-features">
        <div className="feature-pair-container">
          <FeatureLeft imageName="featureSmall7.webp">
            <h2>
              Механизмы
              <br />
              Переработки руд
            </h2>
            <p>
              <strong>7</strong> типов механизмов
            </p>
            <p>
              <strong>3</strong> тира каждого
              <br />
              механизма
            </p>
          </FeatureLeft>
          <FeatureRight imageName="featureSmall8.webp">
            <h2>
              Механизмы
              <br />
              обработки
            </h2>
            <p>
              <strong>14</strong> типов механизмов
            </p>
            <p>
              <strong>7</strong> тиров механизмов
            </p>
            <p>
              <strong>10</strong> улучшений
            </p>
          </FeatureRight>
        </div>
      </div>
    </section>
  );
};

export default Features3;

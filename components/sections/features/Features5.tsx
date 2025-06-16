import FeatureLeft from "./FeatureParts/featureLeft/FeatureLeft";
import FeatureRight from "./FeatureParts/featureRight/FeatureRight";

const Features5 = () => {
  return (
    <section>
      <div className="section-features">
        <div className="feature-pair-container">
          <FeatureLeft imageName="featureSmall9.webp">
            <h2>
              Хранение и
              <br />
              передача энергии
            </h2>
            <p>
              <strong>10</strong> энергохранилищ и <br />
              кристаллов
            </p>
            <p>
              <strong>10</strong> зарядных станций
            </p>
            <p>
              <strong>11</strong> трансформаторов
            </p>
          </FeatureLeft>
          <FeatureRight imageName="featureSmall10.webp">
            <h2>
              Улучшенные
              <br />
              провода и трубы
            </h2>
            <p>
              <strong>13</strong> энергетических проводов
            </p>
            <p>
              <strong>6</strong> жидкостных труб
            </p>
            <p>
              <strong>6</strong> предметных труб
            </p>
          </FeatureRight>
        </div>
      </div>
      <div className="section-divider mt-[50px]" />
    </section>
  );
};

export default Features5;

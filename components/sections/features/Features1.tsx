import FeatureLeft from "./FeatureParts/featureLeft/FeatureLeft";
import FeatureRight from "./FeatureParts/featureRight/FeatureRight";
import FeatureWide from "./FeatureParts/featureWide/FeatureWide";

const Features1 = () => {
  return (
    <section>
      <div className="section-features bg-red-500 gap-[30px] min-[1150px]:gap-[60px]">
        <div className="feature-pair-container">
          <FeatureLeft imageName="featureSmall1.webp">
            <h2>
              Электрические
              <br />
              мечи
            </h2>
            <p>
              Система <strong>заточки</strong>
            </p>
            <p>
              <strong>5</strong> тиров рукояток
            </p>
            <p>
              <strong>13</strong> клинков
            </p>
            <p>
              <strong>26</strong> модулей улучшений
            </p>
          </FeatureLeft>
          <FeatureRight imageName="featureSmall2.webp">
            <h2>
              Электрические
              <br />
              кирки
            </h2>
            <p>
              <strong>5</strong> тиров кирок
            </p>
            <p>
              <strong>27</strong> модулей улучшений
            </p>
          </FeatureRight>
        </div>
        <FeatureWide
          bgImageName="featureWide1bg.webp"
          mainImageName="featureWide1main.webp"
          textH3="Электрическая броня"
          textH4="Предназначена для PvP, PvE и комфортного выживания."
        >
          <p>5 тиров брони</p>
          <p>11 ранцев</p>
          <p>27 модулей улучшения</p>
        </FeatureWide>
        <div className="feature-pair-container">
          <FeatureLeft imageName="featureSmall3.webp">
            <h2>
              Промышленное
              <br />
              Разведение пчёл
            </h2>
            <p>
              <strong>67</strong> видов пчёл
            </p>
            <p>
              <strong>8</strong> видов механизмов
            </p>
            <p>
              <strong>7</strong> тиров механизмов
            </p>
          </FeatureLeft>
          <FeatureRight imageName="featureSmall4.webp">
            <h2>
              Торговый автомат
              <br />и экономика
            </h2>
            <p>
              <strong>3</strong> режима работы
            </p>
            <p>
              <strong>27</strong> типа валют
            </p>
          </FeatureRight>
        </div>
      </div>
    </section>
  );
};

export default Features1;

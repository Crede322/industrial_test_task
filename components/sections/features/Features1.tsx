import FeatureLeft from "./FeatureParts/featureLeft/FeatureLeft";
import FeatureRight from "./FeatureParts/featureRight/FeatureRight";
import FeatureWide from "./FeatureParts/featureWide/FeatureWide";

const Features1 = () => {
  return (
    <section className="section-features section-divided-bottom flex flex-col items-center gap-[80px] py-[50px]">
      <div className="w-[1520px]  flex justify-between">
        <FeatureLeft imageName="featureSmall1.webp">
          <h2>
            Электрические
            <br />
            мечи
          </h2>
          <li>
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
          </li>
        </FeatureLeft>
        <FeatureRight imageName="featureSmall2.webp">
          <h2>
            Электрические
            <br />
            кирки
          </h2>
          <li>
            <p>
              <strong>5</strong> тиров кирок
            </p>
            <p>
              <strong>27</strong> модулей улучшений
            </p>
          </li>
        </FeatureRight>
      </div>
      <FeatureWide
        bgImageName="featureWide1bg.webp"
        mainImageName="featureWide1main.webp"
        textH3="Электрическая броня"
        textH4="Предназначена для PvP, PvE и комфортного выживания."
      >
        <h3></h3>
      </FeatureWide>
      <div className="w-[1520px] flex justify-between">
        <FeatureLeft imageName="featureSmall3.webp">
          <h2>
            Промышленное
            <br />
            Разведение пчёл
          </h2>
          <li>
            <p>
              <strong>67</strong> видов пчёл
            </p>
            <p>
              <strong>8</strong> видов механизмов
            </p>
            <p>
              <strong>7</strong> тиров механизмов
            </p>
          </li>
        </FeatureLeft>
        <FeatureRight imageName="featureSmall3.webp">
          <h2>
            Торговый автомат
            <br />и экономика
          </h2>
          <li>
            <p>
              <strong>3</strong> режима работы
            </p>
            <p>
              <strong>27</strong> типа валют
            </p>
          </li>
        </FeatureRight>
      </div>
    </section>
  );
};

export default Features1;

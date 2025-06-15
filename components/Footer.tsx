import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden">
      <div className="max-w-[98vw] mx-auto">
        <div className="w-full h-fit pt-[30px] pb-[40px] max-w-[1850px] mx-auto relative z-1">
          <div className="h-fit py-[26px] gradient-border2 bg-fadecyan border-[5px] mb-[20px]">
            <ul className="row_links w-full px-[20px] min-[1520px]:px-[100px] flex-wrap flex min-[1520px]:flex-row justify-between h-full items-center gap-[14px] min-[1520px]:gap-[50px] mx-auto title4 text-cyan">
              <li>
                <Link href="https://mcskill.net/static/offer" className="link">
                  Соглашение
                </Link>
              </li>
              <li>
                <Link href="https://mcskill.net/static/policy" className="link">
                  Конфиденциальность
                </Link>
              </li>
              <li>
                <Link href="https://mcskill.net/admins" className="link">
                  Команда проекта
                </Link>
              </li>
              <li>
                <Link href="https://mcskill.net/vacancies" className="link">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link
                  href="https://mcskill.net/static/contacts"
                  className="link"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <h4 className="text2 text-fadeblue">
            © 2012-2025 Комплекс игровых серверов Minecraft &quot;McSkill&quot;
            <br />
            Мы предоставляем ознакомительный бесплатный вариант игры minecraft,
            купить лицензионную версию игры можно&nbsp;
            <a target="_blank" href="https://www.minecraft.net/ru-ru">
              здесь
            </a>
            .
          </h4>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

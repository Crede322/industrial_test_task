import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full backdrop-blur-lg bg-fadecyan fixed z-20">
      <div className="max-w-[1920px] mx-auto h-[100px]">
        <Link href="https://mcskill.net">
          <Image
            src="/images/logo.png"
            width={235}
            height={79}
            className="absolute top-1/2 -translate-y-1/2 ml-[50px]"
            alt="logo"
          />
        </Link>
        <ul className="row_links w-fit flex h-full items-center gap-[50px] mx-auto title4 text-cyan">
          <li>
            <Link href="https://mcskill.net/rules" className="link">
              Правила
            </Link>
          </li>
          <li>
            <Link href="https://mcskill.net/mcforum/" className="link">
              Форум
            </Link>
          </li>
          <li>
            <Link href="https://mcskill.net/servers" className="link">
              Наши сервера
            </Link>
          </li>
          <li>
            <Link href="https://mcskill.net/shop" className="link">
              Магазин
            </Link>
          </li>
          <li>
            <Link href="https://mcskill.net/support" className="link">
              Поддержка
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

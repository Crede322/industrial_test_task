import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-[1920px] h-[100px] backdrop-blur-lg mx-auto bg-fadecyan fixed top-0 left-1/2 -translate-x-1/2 z-20">
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
    </header>
  );
};

export default Header;

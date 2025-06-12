import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-[1920px] h-[100px] mx-auto bg-fadecyan bg fixed top-0 left-1/2 -translate-x-1/2 z-10">
      <Image
        src="/images/logo.webp"
        width={235}
        height={79}
        className="absolute top-1/2 -translate-y-1/2 ml-[50px]"
        alt="logo"
      />
      <ul className="header_ul w-fit flex h-full items-center gap-[50px] mx-auto title4 text-cyan text-shadow-blue">
        <li>
          <Link href="/">Правила</Link>
        </li>
        <li>
          <Link href="/">Форум</Link>
        </li>
        <li>
          <Link href="/">Наши сервера</Link>
        </li>
        <li>
          <Link href="/">Магазин</Link>
        </li>
        <li>
          <Link href="/">Поддержка</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

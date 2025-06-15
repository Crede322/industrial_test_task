"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full backdrop-blur-lg bg-fadecyan fixed z-20">
      <div className="max-w-[1920px] mx-auto h-[100px] flex items-center">
        <Link href="https://mcskill.net">
          <Image
            src="/images/logo.png"
            width={235}
            height={79}
            className="absolute top-1/2 -translate-y-1/2 ml-[3vw]"
            alt="logo"
          />
        </Link>
        <ul
          className={`${isMenuOpen ? classes.menu__on : classes.menu__off}
            row_links absolute px-[2vw] flex-col min-[1400px]:flex-row items-end min-[1400px]:items-center justify-between min-[1400px]:justify-end min-[1660px]:justify-center top-[100%] min-[1400px]:static w-full flex h-full gap-x-[10px] min-[1400px]:gap-[50px] mx-auto title4 text-cyan`}
        >
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
            <Link
              href="https://mcskill.net/servers text-nowrap"
              className="link"
            >
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
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${classes.menu_button} ${
            isMenuOpen ? classes.menu_button_open : classes.menu_button_closed
          } 
            block min-[1400px]:hidden ml-auto mr-[5vw]`}
        >
          <div className={classes.shape} />
          <div className={classes.shape} />
          <div className={classes.shape} />
        </button>
      </div>
    </header>
  );
};

export default Header;

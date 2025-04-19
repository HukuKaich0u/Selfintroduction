"use client";

import Link from "next/link";
import Buttons from "./Buttons";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center">
      <Link href="/">
        <Buttons isActive={pathName === "/"}>Home</Buttons>
      </Link>
      <Link href="/about">
        <Buttons isActive={pathName === "/about"}>About</Buttons>
      </Link>
      <Link href="/etc">
        <Buttons isActive={pathName === "/etc"}>Etc</Buttons>
      </Link>
      <Link href="/contact">
        <Buttons isActive={pathName === "/contact"}>Contact</Buttons>
      </Link>
    </div>
  );
};

export default Menu;

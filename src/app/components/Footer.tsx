import Link from "next/link";
import BottomButton from "./BottomButton";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Link href="/about">
          <BottomButton>About</BottomButton>
        </Link>
        <Link href="/etc">
          <BottomButton>Etc</BottomButton>
        </Link>
        <Link href="/contact">
          <BottomButton>Contact</BottomButton>
        </Link>
      </div>
      <div className="flex  items-center justify-center text-white mt-[200px] mb-4 text-[15px] ">
        <div className="m-2">Thank you for visiting my website!!</div>
        <div className="m-2">©︎ Koki AOYAGI</div>
      </div>
    </div>
  );
};

export default Footer;

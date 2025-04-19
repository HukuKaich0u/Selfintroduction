import Link from "next/link";
import { Libre_Caslon_Text } from "next/font/google";

const libre = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  return (
    <div
      className={`text-[35px] ${libre.className} h-[600px] w-full text-white flex flex-col justify-center items-center`}
    >
      <div className="text-amber-300">Contact</div>
      <div className="flex">
        <div className="mr-3">e-mail:</div>

        <Link
          href={
            "https://mail.google.com/mail/u/0/?to=s1f102402697@iniad.org&fs=1&tf=cm"
          }
          target="_blank"
          className="text-blue-600 underline text-[30px]"
        >
          s1f102402697@iniad.org
        </Link>
      </div>
    </div>
  );
};

export default Contact;

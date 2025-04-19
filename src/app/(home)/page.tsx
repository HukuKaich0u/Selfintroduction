import { Libre_Caslon_Text } from "next/font/google";
import { Kaushan_Script } from "next/font/google";
import Image from "next/image";
import Taison from "../../../public/ろくでなしBLUES_vol.1_.jpg";
import Shitennnou from "../../../public/ろくでなしBLUES.jpg";
import Link from "next/link";

const libre = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const Home = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/for_home.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <p className={`text-[30px] mb-2 ${libre.className}`}>
            Last updated: April 17, 2025
          </p>
          <h1 className={`text-9xl font-bold ${kaushanScript.className} m-15 `}>
            Koki AOYAGI
          </h1>
          <p className={`mt-4 text-[30px] ${libre.className}`}>
            The design of this website is inspired by the official websites of
            {`restaurant Joel Robuchon and L'AS.`}
          </p>
        </div>
      </div>
      <div
        className={`${libre.className} my-[400px] text-white text-center text-[30px] `}
      >
        <div className="m-2">青柳 幸樹 1F10240269</div>
        <div className="m-2">🤱 2004/08/02 🧑‍🍼</div>
        <div className="m-2">生まれ育ち東京都足立区</div>
      </div>
      <div className="flex  justify-center mb-[100px]">
        <Image
          height={400}
          width={300}
          src={Taison}
          alt="ろくでなしBLUES前田太尊"
          className="mr-[100px]"
        />
        <Image
          height={400}
          width={700}
          src={Shitennnou}
          alt="ろくでなしBLUES四天王"
        />
      </div>
      <div className="text-white flex flex-col items-center text-[20px] mb-[300px]">
        <p>ヤングジャンプのURL貼っておくね</p>
        <Link
          href="ynjn.jp/allEpisodeList/589"
          className="underline text-blue-600"
        >
          ynjn.jp/allEpisodeList/589{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;

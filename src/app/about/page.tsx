import { Libre_Caslon_Text } from "next/font/google";
import { Kaushan_Script } from "next/font/google";
import Image from "next/image";

const libre = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/for_about.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1
            className={`text-7xl opacity-80 font-bold ${kaushanScript.className} m-15 `}
          >
            More Details Mbout Me
          </h1>
        </div>
      </div>

      <div
        className={`flex flex-col ${libre.className} justify-center items-center m-[300px]`}
      >
        <div className={`text-amber-300  text-[30px] mb-[40px] `}>
          About My Career
        </div>
        <div className="text-white flex flex-col items-center text-[18px]">
          <div className="m-2">・2017/04 ~ 2020/03 足立区立第13中学校</div>
          <div className="m-2">・2020/04 ~ 2023/03 東京都立日比谷高校</div>
          <div className="m-2">
            ・2023/04 ~ 2024/03 駿台予備学校お茶の水3号館 浪人
          </div>
          <div className="m-2">
            ・2024/04 ~ 東洋大学情報連携学部情報連携学科
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col ${libre.className} justify-center items-center m-[300px]`}
      >
        <div className={`text-amber-300  text-[30px] mb-[40px] `}>
          About My Interests
        </div>
        <div className="text-white flex flex-col items-center text-[18px]">
          <div className="m-2">・筋トレ</div>
          <div className="m-2">・野球(プレーするのも観戦するのも)</div>
          <div className="m-2">・コーディング</div>
          <div className="m-2">
            ・ご飯(恵比寿にあるAbbessesてところがよかった)
          </div>
          <div className="m-2">・音楽はKid Fresino, blackbear</div>
          <div className="my-[100px] flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AQ2T5VVQfp0?si=2NRrRq5eRVwMGfGB"
              title="YouTube video player"
              allowFullScreen
              className="mx-7 "
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yMlKJGKyoCo?si=N7IIUo2alt-gA0xh"
              title="YouTube video player"
              allowFullScreen
              className="mx-7 "
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hbXcy50umRc?si=myKjLDPihUDMHKtG"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col ${libre.className} justify-center items-center m-[300px]`}
      >
        <div className={`text-amber-300  text-[30px] mb-[40px] `}>
          About My Past Challenges
        </div>
        <div className="text-white flex flex-col items-center text-[18px]">
          <div className="m-2">
            いかに楽にどれだけ手を抜けるかサボれるかってことに力を入れて取り組んできました
          </div>
          <div className="m-2">
            今まで特に力を入れたのは野球と高3の体育祭文化祭
          </div>
          <div className="m-2">
            いちばん頑張りたかったけど頑張れなかったのは大学受験
          </div>
        </div>
        <div className="flex w-full justify-around m-[100px] ">
          <Image
            height={200}
            width={200}
            src={"/baseball.jpg"}
            alt="高校の野球部の写真"
          />
          <Image
            height={200}
            width={200}
            src={"/sportsday.jpg"}
            alt="高校の体育祭の写真"
          />
          <Image
            height={200}
            width={500}
            src={"/bunkasai.jpg"}
            alt="高校の文化祭の写真"
          />
        </div>
      </div>
      <div
        className={`flex flex-col ${libre.className} justify-center items-center m-[300px]`}
      >
        <div className={`text-amber-300  text-[30px] mb-[40px] `}>
          About My Future Challenges
        </div>
        <div className="text-white flex flex-col items-center text-[18px]">
          <div className="m-2">
            INIADでしかできないことはほぼないので取り組みたいこと....
          </div>
          <div className="m-2">
            最近やっと講義内容が面白く感じてきたので、きちんと向き合いたいなと思います。
          </div>
          <div className="m-2">
            勉強も遊びもバイトも趣味もぜんぶ全力で倒す。
          </div>
          <div className="m-2">
            友人との共同起業とか着々と進めていくのが今いちばん頑張りたいことかもしれない。
          </div>
          <div className="m-2">
            確実に数年後来たるAGIとの共生についてもこの時間でちゃんと考えたい。
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

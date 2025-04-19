import { Kaushan_Script } from "next/font/google";
import Image from "next/image";

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const Etc = () => {
  return (
    <div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/for_etc.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1
            className={`text-7xl opacity-80 font-bold ${kaushanScript.className} m-15 `}
          >
            Etcetera
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center m-[300px] text-white text-[20px]">
        <div>以下自分が普段使ってるホームページです。</div>
        <div>
          URLを貼るのは気が引けたのでスクリーンショットを貼っておきます。
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          height={400}
          width={400}
          src={"/homepageAbout.png"}
          alt="自分のホームページのスクリーンショット"
          className="m-3"
        />
        <Image
          height={400}
          width={400}
          src={"/homepageHome.png"}
          alt="自分のホームページのスクリーンショット"
          className="m-3"
        />
        <Image
          height={400}
          width={400}
          src={"/homepageEtc.png"}
          alt="自分のホームページのスクリーンショット"
          className="m-3"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-white m-[150px] text-[18px]">
        <div className="m-5 flex flex-col justify-center items-center">
          <div className="m-2">
            中央の画像に写ってる外国人の友人らは最近特に仲良くしてもらってる方達です。
          </div>
          <div className="m-2">クルクル髪の人は筋トレ仲間です。</div>
          <div className="m-2">みんなお互いに英語が第二言語なので、</div>
          <div className="m-2">
            変なこと言ってたら教えてくれるのがありがたい。
          </div>
        </div>
        <div className="m-5 flex flex-col justify-center items-center">
          <div className="m-2">
            自分が使うスキルセットは右の画像にある通りです。
          </div>
          <div className="m-2">
            このサイト自体には TypeScript / React / TailwindCSS / Next
            が使われています。
          </div>
          <div className="m-2">
            得意なプログラミング言語はGo言語で好きな言語もGo言語です。
          </div>
          <div className="m-2">理由は言語仕様がとてもシンプルで、</div>
          <div className="m-2">
            Python, JavaScriptやTypeScriptのオブジェクト指向が好きじゃなく、
          </div>
          <div className="m-2">
            Go言語のインターフェース指向が書きやすいからです。
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-[400px] text-white text-[18px]">
        <div className="m-2">今年度は落単できないので頑張ります。</div>
        <div className="m-2">
          最近人の夢だったり目標を聞くのが面白くて好きなので、ぜひ皆さん教えてください。
        </div>
        <div className="m-2">半年間よろしくお願いします。</div>
      </div>
    </div>
  );
};

export default Etc;

import Image from "next/image";
import Icon from "../../../public/icon.jpg";

const Title = () => {
  return (
    <div className="flex items-center">
      <Image height={40} width={50} src={Icon} alt="アイコン" className="m-5" />
      <div className="text-white text-xl font-thin ">Selfintroduction</div>
    </div>
  );
};

export default Title;

import Menu from "./Menu";
import Title from "./Title";

const Header = () => {
  return (
    <div className="bg-zinc-800 opacity-85 h-[55px] flex justify-between fixed top-0 w-full z-10">
      <Title />
      <Menu />
    </div>
  );
};

export default Header;

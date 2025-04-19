type NavButtonsType = {
  children: React.ReactNode;
  isActive: boolean;
};

const Buttons = (props: NavButtonsType) => {
  const { children, isActive } = props;
  return (
    <button className={`text-gray-500 m-4 ${isActive ? "text-white" : ""}`}>
      {children}
    </button>
  );
};

export default Buttons;

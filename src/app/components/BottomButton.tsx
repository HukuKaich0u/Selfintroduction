type BottomButtonsType = {
  children: React.ReactNode;
};
const BottomButton = (props: BottomButtonsType) => {
  const { children } = props;
  return (
    <div className="flex justify-center items-center bg-white rounded-[3px] w-[130px] h-[30px]  m-4">
      <button> {children} </button>
    </div>
  );
};

export default BottomButton;

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#E50000] text-white rounded-md flex justify-center items-center font-manrope">
      <div className="p-[14px]">{text}</div>
    </button>
  );
};

export default Button;

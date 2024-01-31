interface ButtonProps {
  text: string;
  image: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ text, image, className }) => {
  return (
    <button
      className={`bg-[#E50000] text-white curosr-pointer flex rounded-md my-[30px] font-manrope ${className}`}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="inline-block ml-2 mt-[13px] pr-[2px]"
        />
      )}
      <div className="py-[14px] pr-[18px]">{text}</div>
    </button>
  );
};

export default Button;

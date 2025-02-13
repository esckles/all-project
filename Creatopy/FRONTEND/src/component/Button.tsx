import { FC } from "react";

interface iProps {
  title?: string;
  color?: boolean;
}

const Button: FC<iProps> = ({ title, color }) => {
  return (
    <div>
      <button
        className={`flex items-center text-[16px] border rounded-md w-[130px] h-[37px] font-semibold justify-center ${
          color && "bg-blue-400 text-white"
        } `}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  content: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ content, link }) => {
  return (
    <Link to={link}>
      <button
        className={"bg-btnColor text-white p-[15px] px-[27px] font-semibold rounded-xl"}
        type="button"
      >
        {content}
      </button>
    </Link>
  );
};

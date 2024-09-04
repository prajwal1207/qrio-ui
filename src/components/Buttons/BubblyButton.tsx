import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonColor: string;
  textColor: string;
}

const BubblyButton: React.FC<ButtonProps> = ({
  buttonText,
  buttonColor,
  textColor,
  ...props
}) => {
  const animateButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("animate");
    e.currentTarget.classList.add("animate");
    setTimeout(() => {
      e.currentTarget.classList.remove("animate");
    }, 700);
  };

  return (
    <div className="">
      <button
        className={`bubbly-button text-lg py-2 px-4 mt-12 mb-16 font-semibold rounded-full ${
          buttonColor || "bg-teal-400"
        } ${textColor || "text-black"}`}
        style={{ boxShadow: `0 2px 25px ${buttonColor || "#00fffc"}` }}
        onClick={animateButton}
        {...props}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BubblyButton;

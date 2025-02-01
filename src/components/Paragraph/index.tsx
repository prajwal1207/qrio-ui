import React, { ReactNode } from "react";

const sizes = {
  textsm: "text-[14px] font-normal",
  textbase: "text-[16px] font-normal",
  textlg: "text-[18px] font-normal",
  textxl: "text-[20px] font-normal",
  text2xl: "text-[24px] font-normal",
};

type ParagraphProps = {
  children: ReactNode;
  className?: string;
  size?: keyof typeof sizes;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  size = "textbase",
  ...restProps
}) => {
  return (
    <p className={`text-white ${sizes[size]} ${className}`} {...restProps}>
      {children}
    </p>
  );
};

export default Paragraph;

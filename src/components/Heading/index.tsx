import React, { ElementType, ReactNode } from "react";

const sizes = {
  textlg: "text-[18px] font-medium sm:text-[17px] md:text-[16px]",
  textxl: "text-[22px] font-medium sm:text-[20px] md:text-[18px]",
  headingxs: "text-[14px] font-bold",
  headings: "text-[15px] font-bold",
  headingmd: "text-[18px] font-bold sm:text-[16px] md:text-[15px]",
  headinglg: "text-[20px] font-bold sm:text-[18px] md:text-[17px]",
  headingxl: "text-[22px] font-bold sm:text-[20px] md:text-[18px]",
  heading2xl: "text-[26px] font-bold sm:text-[24px] md:text-[22px]",
  heading3xl: "text-[36px] font-bold sm:text-[32px] md:text-[30px]",
  heading4xl: "text-[48px] font-bold sm:text-[40px] md:text-[38px]",
  heading5xl: "text-[50px] font-bold sm:text-[42px] md:text-[40px]",
  heading6xl: "text-[72px] font-bold sm:text-[56px] md:text-[48px]",
  heading7xl: "text-[85px] font-bold sm:text-[60px] md:text-[48px]",
};

type HeadingProps = {
  children: ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  as?: ElementType;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  size = "textlg",
  as: Component = "h6",
  ...restProps
}) => {
  return (
    <Component
      className={`text-gray-900_02 font-dmsans ${sizes[size]} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;

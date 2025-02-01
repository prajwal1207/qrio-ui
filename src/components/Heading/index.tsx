import React, { ElementType, ReactNode } from "react";

const sizes = {
  textlg: "text-[18px] font-medium lg:text-[15px]",
  textxl: "text-[22px] font-medium lg:text-[18px]",
  headingxs: "text-[14px] font-bold",
  headings: "text-[15px] font-bold",
  headingmd: "text-[18px] font-bold lg:text-[15px]",
  headinglg: "text-[20px] font-bold lg:text-[17px]",
  headingxl: "text-[22px] font-bold lg:text-[18px]",
  heading2xl: "text-[26px] font-bold lg:text-[22px] md:text-[24px] sm:text-[22px]",
  heading3xl: "text-[36px] font-bold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  heading4xl: "text-[48px] font-bold lg:text-[40px] md:text-[44px] sm:text-[38px]",
  heading5xl: "text-[50px] font-bold lg:text-[42px] md:text-[46px] sm:text-[40px]",
  heading6xl: "text-[72px] font-bold lg:text-[72px] md:text-[48px]",
  heading7xl: "text-[85px] font-bold lg:text-[85px] md:text-[48px]",
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
      className={`text-gray-900_02 font-dmsans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;

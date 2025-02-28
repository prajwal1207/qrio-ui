import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal",
  texts: "text-[15px] font-normal",
  textmd: "text-[16px] font-normal lg:text-[13px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-blue_gray-800 font-dmsans   ${sizes[size]} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text ;

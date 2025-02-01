import React, { ImgHTMLAttributes } from "react";

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

const Img: React.FC<ImgProps> = ({
  className,
  src = "defaultNodata.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      {...restProps}
      loading="lazy"
    />
  );
};

export default Img;

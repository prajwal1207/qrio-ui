import React from "react";
import styles from "./styles.module.scss";

interface BookProps {
  image: string;
  text: string;
  width?: string;
  height?: string;
  name: string;
  boxShadowColor?: string;
}

const Book: React.FC<BookProps> = ({
  image,
  text,
  width = "300px",
  height = "400px",
  boxShadowColor = "blue",
  name = "",
}) => {
  console.log({width,height,boxShadowColor})
  return (
    <div className={styles.book}>
      <img src={image} alt="Book cover" />
      <h1 className="text-purple-600">{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Book;

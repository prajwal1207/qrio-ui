import React from "react";
import styles from "./Styles.module.scss";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<Button> = ({ text }) => {
  return <button className={`font-bold ${styles.btn_donate}`}>{text}</button>;
};

export default Button;

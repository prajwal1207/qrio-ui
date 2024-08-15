import logo from "../../../assets/images/QRIO.png";
import styles from "./styles.module.scss";

const ServiceCard = () => {
  return (
    <div className={styles.card}>
      <h2 className="text-xl text-white">360 degree marketing</h2>
      <img src={logo} style={{ height: "100px" }} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique non
      </p>
    </div>
  );
};

export default ServiceCard;

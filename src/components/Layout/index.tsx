import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

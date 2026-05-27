import styles from "./MainLayout.module.css";
import Header from "../../components/Header/HeaderSection/Header";
import Footer from "../../../shared/components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>

      <main className={styles.main}>{children}</main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

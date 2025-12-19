import Card from "./components/card/Card";
import Wellcome from "./components/wellcome/Wellcome";
import styles from "./style/Styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWellcome}>
        <Wellcome />
        <Card />
      </div>
    </div>
  );
};

export default Home;

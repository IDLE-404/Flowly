import React from "react";
import styles from "./style/Styles.module.css";
import { useNavigate } from "react-router-dom";

const Wellcome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.ball}></div>
      <div className={styles.boxWellcome}>
        <div className={styles.containerWellcome}>
          <span className={styles.title} >Найдите подходящий курс для <p className={styles.textgradient}>вашего развития</p></span>
          <p className={styles.text}>Открывайте, сравнивайте и сохраняйте лучшие курсы</p>
        </div>
        <div className={styles.boxBtn}>
          <button onClick={() => navigate("/courses")}>Найти курсы</button>
          <button onClick={() => navigate("/compare")}>Сравнить</button>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;

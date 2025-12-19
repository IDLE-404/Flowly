import React from 'react'
import { wellcomeCard } from '../../../../../data/WellcomeCards/WellcomeCards'
import styles from './style/Styles.module.css'
const Card = () => {
  return (
    <div className={styles.container}>
      {wellcomeCard.map((item, key) =>(
        <div className={styles.cardBox} key={key}>
          <div className={styles.icon}>
            {item.icon}
          </div>
          <div className={styles.textBox}>
            <span className={styles.title}>{item.title}</span>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
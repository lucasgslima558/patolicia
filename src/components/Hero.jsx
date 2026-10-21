import React from 'react'
import styles from './Hero.module.css'

export default function Hero({onOpenOrder}){
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles['hero-left']}>
        <h1>O bolinho mais fofo que você já comeu.</h1>
        <p>Macio, delicioso e com um formato muito diferente.</p>
        <div style={{marginTop:20}}>
          <button className={styles.primary} onClick={onOpenOrder}>Quero experimentar</button>
        </div>
      </div>
      <div className={styles['product-shot']}>
        <div className={styles.duck}>
          <div className={styles.inner}></div>
        </div>
      </div>
    </section>
  )
}

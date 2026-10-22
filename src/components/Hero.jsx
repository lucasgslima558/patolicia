import React from 'react'
import styles from './Hero.module.css'
import logo from '../../assets/logo.png'

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
        {/* Replace decorative duck figure with the logo image */}
        <img src="/assets/logo.png" alt="Patolícia logo" style={{width:220,height:220,objectFit:'contain',borderRadius:12}} />
      </div>
    </section>
  )
}

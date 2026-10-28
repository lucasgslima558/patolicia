import React from 'react'
import styles from './Hero.module.css'
import logo from '../../assets/logo.png'

export default function Hero({onOpenOrder}){
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles['hero-left']}>
        <div className={styles.kicker}>Novidade</div>
        <h1>O bolinho pato que conquista corações.</h1>
        <p>Macio, recheado e irresistivelmente fofo — perfeito para presente ou para aquele momento doce com quem você gosta.</p>
        <div className={styles['cta-row']}>
          <button className={styles.primary} onClick={onOpenOrder}>Quero experimentar</button>
          <button className={styles.secondary} onClick={()=>document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})}>Ver sabores</button>
        </div>
      </div>
      <div className={styles['product-shot']}>
        <div className={styles['decor-blob']} aria-hidden/>
        <div className={styles['product-card']}>
          <img src={'/assets/galeria/Gemini_Generated_Image_puiwm5puiwm5puiw.jpeg'} alt="Bolinhos Patinho"/>
        </div>
      </div>
    </section>
  )
}

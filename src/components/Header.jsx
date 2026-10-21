import React from 'react'
import styles from './Header.module.css'

export default function Header({onOpenOrder}){
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>
        <div className={styles['logo-mark']}>P</div>
        <div>
          <div style={{fontWeight:800}}>Patolícia</div>
          <div style={{fontSize:12,color:'#6b6b6b'}}>Bolinhos em formato de pato</div>
        </div>
      </div>
      <nav className={styles.nav}>
        <button onClick={()=>document.getElementById('benefits')?.scrollIntoView({behavior:'smooth'})}>Benefícios</button>
        <button onClick={()=>document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})}>Galeria</button>
        <button onClick={()=>document.getElementById('flavors')?.scrollIntoView({behavior:'smooth'})}>Sabores</button>
        <button className={styles.primary} onClick={onOpenOrder}>Quero experimentar</button>
      </nav>
    </header>
  )
}

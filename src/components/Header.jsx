import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

export default function Header({onOpenOrder}){
  return (
    <header className={`${styles.header} container`} style={{fontFamily:'"Nunito", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'}}>
      <div className={styles.logo}>
        <img src={logo} alt="Patolícia" style={{width:48,height:48,objectFit:'contain',borderRadius:8,marginRight:12}} />
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

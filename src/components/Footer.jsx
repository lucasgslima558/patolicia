import React from 'react'

import fb from '../../assets/footer-redes/facebook.png'
import ig from '../../assets/footer-redes/instagram.png'
import tw from '../../assets/footer-redes/twitter.png'
import li from '../../assets/footer-redes/linkedin.png'

export default function Footer(){
  return (
    <footer className="container footer">
      <div className="site-footer">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <img src={'/assets/logo.png'} alt="logo" style={{width:44,height:44,borderRadius:10}}/>
          <div className="brand">Patolícia — Bolinhos em formato de pato</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:24}}>
          <nav style={{display:'flex',gap:16}}>
            <a href="#gallery">Galeria</a>
            <a href="#flavors">Sabores</a>
            <a href="#benefits">Diferenciais</a>
          </nav>
          <div className="social">
            <a href="#"><img src={fb} alt="Facebook" style={{width:22,height:22}}/></a>
            <a href="#"><img src={ig} alt="Instagram" style={{width:22,height:22}}/></a>
            <a href="#"><img src={tw} alt="Twitter" style={{width:22,height:22}}/></a>
            <a href="#"><img src={li} alt="LinkedIn" style={{width:22,height:22}}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

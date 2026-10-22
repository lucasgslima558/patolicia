import React from 'react'

import fb from '../../assets/footer-redes/facebook.png'
import ig from '../../assets/footer-redes/instagram.png'
import tw from '../../assets/footer-redes/twitter.png'
import li from '../../assets/footer-redes/linkedin.png'

export default function Footer(){
  return (
    <footer className="container footer" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div>Patolícia — Bolinhos em formato de pato</div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <a href="#"><img src={fb} alt="Facebook" style={{width:24,height:24}}/></a>
        <a href="#"><img src={ig} alt="Instagram" style={{width:24,height:24}}/></a>
        <a href="#"><img src={tw} alt="Twitter" style={{width:24,height:24}}/></a>
        <a href="#"><img src={li} alt="LinkedIn" style={{width:24,height:24}}/></a>
      </div>
    </footer>
  )
}

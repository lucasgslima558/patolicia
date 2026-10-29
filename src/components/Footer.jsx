import React from 'react'

import fb from '../../assets/footer-redes/facebook.png'
import ig from '../../assets/footer-redes/instagram.png'
import tw from '../../assets/footer-redes/twitter.png'
import li from '../../assets/footer-redes/linkedin.png'

export default function Footer(){
  return (
    <footer className="container footer">
      <div className="footer-columns">
        <div className="footer-col footer-brand">
          <img src={'/assets/logo.png'} alt="logo" style={{width:56,height:56,borderRadius:12,marginBottom:8}}/>
          <div style={{fontWeight:800}}>Patolícia</div>
        </div>

        <div className="footer-col">
          <div className="col-title">Navegação</div>
          <ul>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#flavors">Sabores</a></li>
            <li><a href="#benefits">Diferenciais</a></li>
            <li><a href="#prices">Preços</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="col-title">Informações</div>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="col-title">Siga</div>
          <div style={{display:'flex',gap:12,marginTop:8}}>
            <a href="#" aria-label="Facebook"><img src={fb} alt="Facebook" style={{width:22,height:22}}/></a>
            <a href="#" aria-label="Instagram"><img src={ig} alt="Instagram" style={{width:22,height:22}}/></a>
            <a href="#" aria-label="Twitter"><img src={tw} alt="Twitter" style={{width:22,height:22}}/></a>
            <a href="#" aria-label="LinkedIn"><img src={li} alt="LinkedIn" style={{width:22,height:22}}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

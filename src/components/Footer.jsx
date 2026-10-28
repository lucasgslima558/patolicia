import React from 'react'

import fb from '../../assets/footer-redes/facebook.png'
import ig from '../../assets/footer-redes/instagram.png'
import tw from '../../assets/footer-redes/twitter.png'
import li from '../../assets/footer-redes/linkedin.png'

export default function Footer(){
  return (
    <footer className="container footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={'/assets/logo.png'} alt="logo" style={{width:56,height:56,borderRadius:12,marginRight:12}}/>
          <div>
            <div style={{fontWeight:800}}>Patolícia</div>
            <div style={{color:'#6b6b6b',fontSize:13}}>Bolinhos em formato de pato</div>
          </div>
        </div>

        <div className="footer-nav">
          <a href="#gallery">Galeria</a>
          <a href="#flavors">Sabores</a>
          <a href="#benefits">Diferenciais</a>
          <a href="#prices">Preços</a>
        </div>

        <div className="footer-social">
          <div style={{marginBottom:6,fontWeight:700}}>Siga a Patolícia</div>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <a href="#" aria-label="Facebook"><img src={fb} alt="Facebook" style={{width:22,height:22}}/></a>
            <a href="#" aria-label="Instagram"><img src={ig} alt="Instagram" style={{width:22,height:22}}/></a>
            <a href="#" aria-label="Twitter"><img src={tw} alt="Twitter" style={{width:22,height:22}}/></a>
            <a href="#" aria-label="LinkedIn"><img src={li} alt="LinkedIn" style={{width:22,height:22}}/></a>
          </div>
        </div>
      </div>
      <div style={{borderTop:'1px solid rgba(0,0,0,0.04)',marginTop:18,paddingTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'#6b6b6b'}}>&copy; {new Date().getFullYear()} Patolícia — Todos os direitos reservados</div>
        <div style={{color:'#6b6b6b'}}>Desenvolvido pela equipe Patolícia</div>
      </div>
    </footer>
  )
}

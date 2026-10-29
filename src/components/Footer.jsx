import React from 'react'

import fb from '../../assets/footer-redes/facebook.png'
import ig from '../../assets/footer-redes/instagram.png'
import tw from '../../assets/footer-redes/twitter.png'
import li from '../../assets/footer-redes/linkedin.png'

export default function Footer(){
  return (
    <footer className="container footer">
      <div className="footer-subscribe">
        <div className="sub-left">
          <div style={{fontWeight:800,fontSize:16}}>Assine nossas novidades</div>
          <div style={{color:'#6b6b6b',fontSize:13}}>Receba lançamentos, ofertas e novidades da Patolícia.</div>
        </div>
        <div className="sub-right">
          <input aria-label="Seu e-mail" placeholder="Digite seu e-mail" style={{padding:'10px 12px',borderRadius:8,border:'1px solid rgba(0,0,0,0.08)',marginRight:8}} />
          <button className="btn-primary">Assinar</button>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-col footer-brand">
          <img src={'/assets/logo.png'} alt="logo" style={{width:56,height:56,borderRadius:12,marginBottom:8}}/>
          <div style={{fontWeight:800}}>Patolícia</div>
          <div style={{color:'#6b6b6b',fontSize:13,marginTop:6}}>Bolinhos em formato de pato — presentes e mimos saborosos com uma apresentação divertida.</div>
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

      <div className="footer-legal">
        <div>&copy; {new Date().getFullYear()} Patolícia — Todos os direitos reservados</div>
        <div>Desenvolvido pela equipe Patolícia</div>
      </div>
    </footer>
  )
}

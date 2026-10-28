import React from 'react'
import styles from './Benefits.module.css'

export default function Benefits(){
  const items = [
    ['Textura macia e delicada','Sinta a massa que derrete na boca'],
    ['Um formato inesquecível','Perfeito para fotos e presentes'],
    ['Sabores para descobrir','Combinações criativas e clássicas'],
    ['Perfeitos para compartilhar','Momentos com quem você gosta']
  ];
  return (
    <section id="benefits" className="container section">
      <h2>Uma experiência que vira presente.</h2>
      <div className="benefit-grid" style={{marginTop:18}}>
        {items.map((it,idx)=>(
          <div className={`card ${idx%2===0? 'card-large':''}`} key={idx}>
            <div className={styles.benefit}>
              <div className={styles.icon}>{idx+1}</div>
              <div>
                <div style={{fontWeight:800,fontSize:16}}>{it[0]}</div>
                <div style={{color:'#6b6b6b',marginTop:6}}>{it[1]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

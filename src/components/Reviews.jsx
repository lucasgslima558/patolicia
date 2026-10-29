import React from 'react'

export default function Reviews(){
  const rev = [
    ['Mariana','"A apresentação é incrível, todos adoraram."'],
    ['João','"A textura é realmente macia, surpreendente."'],
    ['Lívia','"Perfeito como presente, a caixa é tão charmosa."'],
    ['Carlos','"Ótima experiência de encomenda e entrega."']
  ];
  return (
    <section className="container section">
      <h3>O que dizem</h3>
      <div className="cards" style={{marginTop:14}}>
        {rev.map((r,i)=>(
          <div className="card" key={i} style={{minWidth:200,maxWidth:300}}>
            <div style={{fontWeight:800,marginBottom:8}}>{r[0]}</div>
            <div className="stars">★★★★★</div>
            <div style={{color:'#6b6b6b',marginTop:10,fontStyle:'italic'}}>{r[1].replace(/\"/g,'')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

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
      <div className="cards" style={{marginTop:12}}>
        {rev.map((r,i)=>(
          <div className="card" key={i}>
            <div style={{fontWeight:700}}>{r[0]}</div>
            <div className="stars">★★★★★</div>
            <div style={{color:'#6b6b6b'}}>{r[1]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

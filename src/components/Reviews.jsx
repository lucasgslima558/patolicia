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
      <div className="reviews" style={{marginTop:14}}>
        <div className="reviews-main">
          <div className="quote">“{rev[0][1].replace(/\"/g,'')}”</div>
          <div style={{marginTop:12,fontWeight:800}}>- {rev[0][0]}</div>
        </div>
        <div className="reviews-side">
          {rev.slice(1).map((r,i)=>(
            <div className="card" key={i} style={{marginBottom:12}}>
              <div style={{fontWeight:700}}>{r[0]}</div>
              <div className="stars">★★★★★</div>
              <div style={{color:'#6b6b6b',marginTop:6}}>{r[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

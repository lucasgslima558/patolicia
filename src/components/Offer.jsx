import React from 'react'

const BOXES = [
  {name:'Caixa pequena',qty:3,price:24.90},
  {name:'Caixa média',qty:6,price:39.90},
  {name:'Caixa grande',qty:9,price:55.90},
  {name:'Caixa especial',qty:12,price:79.90}
]

export default function Offer(){
  return (
    <section className="container section">
      <h3>Oferta e preços</h3>
      <div className="prices" style={{marginTop:12}}>
        {BOXES.map((b,i)=>(<div className="price" key={i}><div style={{fontWeight:700}}>{b.name}</div><div style={{color:'#6b6b6b'}}>{b.qty} bolinhos</div><div style={{marginTop:8,fontWeight:800}}>R$ {b.price.toFixed(2)}</div></div>))}
      </div>
    </section>
  )
}

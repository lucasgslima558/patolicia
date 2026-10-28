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
      <h3>Caixas e preços</h3>
      <div className="prices" style={{marginTop:18}}>
        {BOXES.map((b,i)=>(
          <div className="price" key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',padding:20}}>
            <div className="label">{b.name}</div>
            <div style={{color:'#6b6b6b',marginTop:6}}>{b.qty} bolinhos</div>
            <div className="amount">R$ {b.price.toFixed(2)}</div>
            <button className="btn-primary" style={{marginTop:12,background:'var(--primary)',border:0,padding:'10px 16px',borderRadius:12,cursor:'pointer',fontWeight:800}}>Encomendar</button>
          </div>
        ))}
      </div>
    </section>
  )
}

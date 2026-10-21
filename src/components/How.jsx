import React from 'react'

export default function How(){
  const steps = ['Escolha sua caixa','Descubra seus sabores','Finalize sua encomenda'];
  return (
    <section className="container section">
      <h3>Como funciona</h3>
      <div className="cards" style={{marginTop:12}}>
        {steps.map((s,i)=>(
          <div key={i} className="card"><div style={{fontWeight:700}}>{i+1}. {s}</div></div>
        ))}
      </div>
    </section>
  )
}

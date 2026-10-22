import React from 'react'

export default function How(){
  const steps = [
    {title:'Escolha sua caixa', desc:'Selecione o tamanho ideal para a ocasião'},
    {title:'Descubra seus sabores', desc:'Explore as opções e monte sua combinação'},
    {title:'Finalize sua encomenda', desc:'Revise a seleção e visualize a confirmação do pedido'}
  ];
  return (
    <section className="container section">
      <h3>Como funciona</h3>
      <div className="cards" style={{marginTop:12}}>
        {steps.map((s,i)=>(
          <div key={i} className="card" style={{padding:12}}>
            <div style={{fontWeight:700}}>{i+1}. {s.title}</div>
            <div style={{color:'#6b6b6b',marginTop:6}}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

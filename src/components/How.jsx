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
      <div className="steps" style={{marginTop:16}}>
        {steps.map((s,i)=>(
          <div key={i} className="step">
            <div className="step-num">{i+1}</div>
            <div>
              <div style={{fontWeight:800}}>{s.title}</div>
              <div style={{color:'#6b6b6b',marginTop:6}}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

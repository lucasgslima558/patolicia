import React from 'react'

export default function FAQ(){
  return (
    <section className="container section">
      <h3>Tem alguma dúvida sobre os patinhos?</h3>
      <div className="faq-grid" style={{marginTop:16}}>
        <div className="card">
          <div style={{fontWeight:800}}>O que exatamente é o produto?</div>
          <div style={{color:'#6b6b6b',marginTop:8}}>É um bolinho macio em formato de pato, desenvolvido para combinar uma apresentação divertida com um delicioso docinho.</div>
        </div>
        <div className="card">
          <div style={{fontWeight:800}}>Quantos bolinhos vêm em cada caixa?</div>
          <div style={{color:'#6b6b6b',marginTop:8}}>A quantidade depende do tamanho da caixa escolhida. Como demonstrado na seção de preços, caixas podem variar de 3 a 12 bolinhos.</div>
        </div>
        <div className="card">
          <div style={{fontWeight:800}}>Quais sabores estão disponíveis?</div>
          <div style={{color:'#6b6b6b',marginTop:8}}>Demonstrado na seção de sabores. Vendemos bolinhos de baunilha, chocolate, e outros sabores mencionados na página.</div>
        </div>
        <div className="card">
          <div style={{fontWeight:800}}>Posso comprar para eventos?</div>
          <div style={{color:'#6b6b6b',marginTop:8}}>Claro! Entrando em contato com a gente, é possível encomendar maiores quantias do produto e negociar um preço conosco.</div>
        </div>
      </div>
    </section>
  )
}

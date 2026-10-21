import React from 'react'

export default function Flavors(){
  const flavors = [
    ['Baunilha','Delicado e clássico'],
    ['Chocolate','Intenso e reconfortante'],
    ['Morango','Frutado e delicado'],
    ['Matcha','Complexo e equilibrado'],
    ['Coco','Suave e tropical'],
    ['Doce de leite','Cremoso e aconchegante']
  ];
  return (
    <section id="flavors" className="container section">
      <h3>Sabores</h3>
      <div className="flavors" style={{marginTop:12}}>
        {flavors.map((f,i)=>(
          <div className="flavor" key={i}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:60,height:60,borderRadius:12,background:'var(--detail)'}}></div>
              <div>
                <div style={{fontWeight:700}}>{f[0]}</div>
                <div style={{color:'#6b6b6b'}}>{f[1]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

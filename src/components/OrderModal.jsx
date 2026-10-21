import React from 'react'
import styles from './OrderModal.module.css'

const BOXES = [
  {name:'Caixa pequena',qty:3,price:24.90},
  {name:'Caixa média',qty:6,price:39.90},
  {name:'Caixa grande',qty:9,price:55.90},
  {name:'Caixa especial',qty:12,price:79.90}
]

export default function OrderModal({onClose}){
  const [box,setBox] = React.useState(BOXES[1])
  const flavors = ['Baunilha','Chocolate','Morango','Matcha','Coco','Doce de leite']
  const [selection,setSelection] = React.useState(Array(box.qty).fill(flavors[0]))

  React.useEffect(()=>{
    setSelection(Array(box.qty).fill(flavors[0]))
  },[box])

  function toggleFlavor(index,fl){
    const s = [...selection];
    s[index]=fl;
    setSelection(s);
  }

  const total = box.price.toFixed(2)

  return (
    <div className={styles.modal}>
      <div className={styles.panel}>
        <button onClick={onClose} style={{float:'right'}}>Fechar</button>
        <h3>Simulação de encomenda</h3>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {BOXES.map((b,i)=>(
            <div key={i} style={{cursor:'pointer',padding:10,borderRadius:10,background: b.name===box.name? 'var(--accent)':'#fff'}} onClick={()=>setBox(b)}>
              <div style={{fontWeight:700}}>{b.name}</div>
              <div style={{color:'#6b6b6b'}}>{b.qty} bolinhos — R$ {b.price.toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:12}}>
          <div style={{fontWeight:700}}>Escolha os sabores</div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
            {selection.map((sel,i)=>(
              <div key={i} style={{background:'#fff',padding:8,borderRadius:8,minWidth:140}}>
                <div style={{fontSize:12,color:'#6b6b6b'}}>Bolinhos {i+1}</div>
                <select value={sel} onChange={(e)=>toggleFlavor(i,e.target.value)}>
                  {flavors.map((f,ii)=>(<option key={ii} value={f}>{f}</option>))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
          <div>
            <div style={{fontWeight:700}}>Total</div>
            <div>R$ {total}</div>
          </div>
          <div>
            <button className="btn-primary" onClick={()=>{
              alert('Pedido confirmado!\nResumo:\n'+box.name+' - '+box.qty+' bolinhos\nSabores: '+selection.join(', '));
              onClose();
            }}>Confirmar encomenda</button>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Gallery from './components/Gallery'
import How from './components/How'
import Reviews from './components/Reviews'
import Flavors from './components/Flavors'
import FAQ from './components/FAQ'
import Offer from './components/Offer'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

function useAppViewModel(){
  const [open,setOpen] = React.useState(false)
  return {
    open,
    openOrder:()=>setOpen(true),
    closeOrder:()=>setOpen(false)
  }
}

export default function App(){
  const vm = useAppViewModel()
  return (
    <div>
      <Header onOpenOrder={vm.openOrder} />
      <Hero onOpenOrder={vm.openOrder} />
      <Benefits />
      <Gallery />
      <How />
      <Reviews />
      <Offer />
      <Flavors />
      <FAQ />
      <section className="container section">
        <h3>Encomende agora</h3>
        <p>Faça uma simulação rápida antes de confirmar sua encomenda.</p>
        <button className="btn-primary" onClick={vm.openOrder} style={{background:'var(--primary)',border:0,padding:'12px 20px',borderRadius:14,fontWeight:700,cursor:'pointer'}}>Quero experimentar</button>
      </section>
      <Footer />
      {vm.open && <OrderModal onClose={vm.closeOrder} />}
    </div>
  )
}

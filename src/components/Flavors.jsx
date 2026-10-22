import React from 'react'

export default function Flavors(){
  // Replace flavors list with a single hero image for the flavors section
  return (
    <section id="flavors" className="container section">
      <h3>Sabores</h3>
      <div style={{marginTop:12}}>
        <img src="/assets/sabores.jpeg" alt="Sabores" style={{width:'100%',height:'auto',borderRadius:12,objectFit:'cover'}} />
      </div>
    </section>
  )
}

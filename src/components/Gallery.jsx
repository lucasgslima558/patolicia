import React from 'react'
import styles from './Gallery.module.css'

export default function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1542367597-81d23b2d9b57?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1512058564366-c9e3f2d1f4b5?auto=format&fit=crop&w=800&q=60'
  ];
  return (
    <section id="gallery" className="container section">
      <h3>Galeria</h3>
      <div className={styles.gallery} style={{marginTop:12}}>
        {imgs.map((s,i)=>(<img key={i} src={s} alt="patinho"/>))}
      </div>
    </section>
  )
}

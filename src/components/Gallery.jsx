import React from 'react'
import styles from './Gallery.module.css'

export default function Gallery(){
  const imgs = [
    '/assets/galeria/Gemini_Generated_Image_puiwm5puiwm5puiw.jpeg',
    '/assets/galeria/Gemini_Generated_Image_h7jxkch7jxkch7jx.jpeg',
    '/assets/galeria/Gemini_Generated_Image_g5fgx4g5fgx4g5fg.jpeg'
  ];
  return (
    <section id="gallery" className="container section">
      <h3>Galeria</h3>
      <div className={styles.gallery} style={{marginTop:12}}>
        {imgs.map((s,i)=>(<img key={i} src={s} alt="patinho" style={{width:'100%',height:'auto',objectFit:'cover'}}/>))}
      </div>
    </section>
  )
}

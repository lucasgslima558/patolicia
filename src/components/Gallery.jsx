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
      <div className={styles.galleryLine} style={{marginTop:12}}>
        <div className={styles.topRow}>
          <div className={styles.leftLarge}>
            <img src={imgs[0]} alt="patinho grande" />
          </div>
          <div className={styles.rightSmall}>
            <img src={imgs[1]} alt="patinho pequeno" />
          </div>
        </div>
        <div className={styles.fullRow}>
          <img src={imgs[2]} alt="patinho destaque" />
        </div>
      </div>
    </section>
  )
}

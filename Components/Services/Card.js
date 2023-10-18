import Image from 'next/image'
import React from 'react'
import styles from './services.module.css'

function Card({photoSrc, serviceName}) {
  return (
    <div style={{position : 'relative', width : '180px', margin : '5px 15px'}}>
        <Image
            src={photoSrc}
            alt="Logo"
            width={180}
            height={80}
            className={styles.imgStyle}
        />
        <div className={styles.overlay}></div>
        <div className={styles.btnStyle}>
            <p>{serviceName}</p>
        </div>
    </div>
  )
}

export default Card
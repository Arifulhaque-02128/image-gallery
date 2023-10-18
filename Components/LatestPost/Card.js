import Image from 'next/image'
import React from 'react'
import styles from './LatestPost.module.css'

function Card({photoSrc, serviceName}) {
  return (
    <div style={{margin : '20px', position : 'relative'}}>
        <Image
            src={photoSrc}
            alt="Logo"
            width={0}
            height={0}
            sizes='100vw'
            style={{width : '100%'}}
        />
        <div className={styles.cardStyle}>
            <p style={{borderBottom : '2px solid gray', display : 'inline', fontSize : '14px', fontFamily : 'monospace', color : 'gray'}}>{serviceName}</p>
            <h2 className={styles.textStyle}>Vivamus placerat Luctus Neque nec Faucibus</h2>
            <p style={{ fontSize : '14px', fontFamily : 'sans-serif', marginTop : '15px', color : 'gray'}}>By Sarfraz Jasim - 29 July, 2023</p>
        </div>
    </div>
  )
}

export default Card
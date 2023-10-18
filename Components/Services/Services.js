import React from 'react'
import Image from 'next/image'
import styles from './services.module.css'
import Card from './Card'

function Services() {

  const sources = [ {src : "/assets/skin.jpg", name : 'SKIN'}, {src : "/assets/hair.png", name : 'HAIR'}, {src : "/assets/makeup.png", name : 'MAKEUP'}, {src : "/assets/tips.png", name : 'TIPS'},{src : "/assets/spa.jpg", name : 'SPA'}]

  return (
    <div className={styles.container}>

        {
            sources.map((s, idx) => 
                <Card key={idx} photoSrc={s.src} serviceName={s.name} />
            )
        }
    </div>
  )
}

export default Services
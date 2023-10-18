import Image from 'next/image'
import React from 'react'
import styles from './LatestPost.module.css'
import Card from './Card'

function LatestPost() {
  const sources = [ {src : "/assets/hair.png", name : 'HAIR'}, {src : "/assets/makeup1.png", name : 'MAKEUP'}, {src : "/assets/makeup.png", name : 'TIPS'}]
  return (
    <div className={styles.container}>
        <div style={{display: 'flex', alignItems : 'center', justifyContent: 'center', flexDirection : "row"}}>
            <div className={styles.horizontalLine}></div>
            <p style={{fontFamily : 'serif', fontSize : '22px', margin : '0px 8px'}}>Latest Posts</p>
            <div className={styles.horizontalLine}></div>
        </div>

        {/* posts */}
        <div style={{display: 'flex', justifyContent: 'center', flexDirection : "row", width : '100%'}}>
            {
                sources.map((s, idx) => 
                    <Card key={idx} photoSrc={s.src} serviceName={s.name} />
                )
            }
        </div>

        {/* big post */}
        <div style={{margin : '20px', position : 'relative', marginTop : "120px"}}>
            <Image
                src='/assets/skin1.png'
                alt="Logo"
                width={0}
                height={0}
                sizes='100vw'
                style={{width : '77%', position : 'absolute', top : '50%', left : '9vw'}}
            />
            <div className={styles.largeCardStyle}>
                <p style={{borderBottom : '2px solid gray', display : 'inline', fontSize : '14px', fontFamily : 'monospace', color : 'gray'}}>SKIN</p>
                <h2 className={styles.largeTextStyle}>Sed dignissim quam nulla, at sodales elit venenatis at. In in fringilla</h2>
                <h4 className={styles.smallTextStyle}>Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..</h4>
                <p style={{ fontSize : '14px', fontFamily : 'sans-serif', marginTop : '15px', color : 'gray'}}>By Sarfraz Jasim - 29 July, 2023</p>
            </div>
        </div>

    </div>
  )
}

export default LatestPost
import Image from 'next/image'
import Gallery from '../../Component/Gallery'
import styles from '../../Component/Gallery.module.css'

export default function Home() {
  return (
    <main className='flex justify-center' >
      <div>
        <h1 className={styles.textStyle} >My Gallery</h1>
        <Gallery />
      </div>
      {/* <div style={{width : '100vw', height: '15vh', display : 'flex', flexDirection : "row", justifyContent : 'center', marginBottom : "20px"}}>
        <Image
            src='/assets/ad1.png'
            alt="Logo"
            width={0}
            height={0}
            sizes='100vw'
            style={{width : '80%', height : '100%'}}
        />
      </div> */}
    </main>
  )
}

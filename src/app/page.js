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
    </main>
  )
}

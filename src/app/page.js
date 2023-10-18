import Image from 'next/image'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import Services from '../../Components/Services/Services'
import LatestPost from '../../Components/LatestPost/LatestPost'

export default function Home() {
  return (
    <main>
      <div className='flex flex-row justify-center'>
        <NavBar />
      </div>
      <div className='flex flex-row justify-center'>
        {/* Header */}
        <Header />
      </div>
      <div className='flex flex-row justify-center'>
        {/* services */}
        <Services />
      </div>

      <div className='flex flex-row justify-center'>
        {/* Latest Posts */}
        <LatestPost />
      </div>
      <div style={{width : '100vw', height: '15vh', display : 'flex', flexDirection : "row", justifyContent : 'center', marginBottom : "20px"}}>
        <Image
            src='/assets/ad1.png'
            alt="Logo"
            width={0}
            height={0}
            sizes='100vw'
            style={{width : '80%', height : '100%'}}
        />
      </div>
    </main>
  )
}

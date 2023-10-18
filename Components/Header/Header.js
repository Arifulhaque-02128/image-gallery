import React from 'react'
import styles from './Header.module.css'
import { BsArrowRight, BsArrowLeftShort } from 'react-icons/bs'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

function Header() {
  return (
    <div className={styles.container}>
        <MdOutlineArrowBackIos size={50} style={{color: 'white', position : 'absolute', top : '40%', left : '5%'}} />
        <div className={styles.boxStyle}>
            <p style={{ fontSize : '14px', fontFamily : 'sans-serif', display : 'inline', borderBottom : '1px solid white' }}>Skin</p>
            <p className={styles.textStyle}>Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat</p>
            <p style={{ fontSize : '14px', fontFamily : 'sans-serif', marginTop : '15px'}}>By Sarfraz Jasim - 29 July, 2023</p>
            <p style={{ fontSize : '14px', fontFamily : 'sans-serif', display : 'flex', marginTop : '15px'}}>
                Continue Reading 
                <BsArrowRight size={20} style={{marginLeft: '4px'}} />
            </p>
        </div>
        <MdOutlineArrowForwardIos size={50} style={{color: 'white', position : 'absolute', top : '40%', right : '5%'}}/>
    </div>
  )
}

export default Header
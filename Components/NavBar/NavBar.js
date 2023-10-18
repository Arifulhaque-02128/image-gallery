'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './NavBar.module.css' 
import { CiInstagram, CiTwitter, CiSearch } from 'react-icons/ci'
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { PiPinterestLogoLight } from 'react-icons/pi';
import { RiThreadsFill } from 'react-icons/ri';

 

function NavBar() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // onSearch(searchTerm);
  };

  return (
    <div className={styles.container}>

        {/* first section */}
        <div className={styles.first_section}>
            <div>
                <p class='font-sans font-light text-lg'>Welcome there!</p>
            </div>
            <div style={{ display:'flex', flexDirection:'row'}}>
                <div class='flex flex-row mr-10' style={{marginRight : '12px'}}>
                    {/* icons */}
                    <FiFacebook className={styles.iconStyle}/>
                    <CiInstagram className={styles.iconStyle}/>
                    <RiThreadsFill className={styles.iconStyle}/>
                    <CiTwitter className={styles.iconStyle}/>
                    <PiPinterestLogoLight className={styles.iconStyle}/>
                    <FiLinkedin className={styles.iconStyle}/>

                </div>
                <div style={{borderLeft : '1px solid gray', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                    {/* subscribe btn */}
                    <button className={styles.btnStyle}>Subscribe</button>
                </div>
            </div>
        </div>


        <div className={styles.secondSection}>
            <div style={{display : 'flex', flexDirection : 'row', padding : '12px'}}>
                <Image
                    src="/Blushlly.png"
                    alt="Logo"
                    width={100}
                    height={30}
                    style={{marginRight : '30px'}}
                />
                <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'center', margin: '6px'}}>
                    <h2 style={{margin : '0px 12px', cursor : 'poiner', fontWeight: '500'}}>Home</h2>
                    <h2 style={{margin : '0px 12px', cursor : 'poiner', fontWeight: '500'}}>Catergories</h2>
                    <h2 style={{margin : '0px 12px', cursor : 'poiner', fontWeight: '500'}}>Makeup</h2>
                    <h2 style={{margin : '0px 12px', cursor : 'poiner', fontWeight: '500'}}>Blog</h2>
                    <h2 style={{margin : '0px 12px', cursor : 'poiner', fontWeight: '500'}}>About</h2>
                    <h2 style={{margin : '0px 12px', cursor : 'poiner', fontWeight: '500'}}>Contact Us</h2>
                </div>
            </div>

            <div style={{display : 'flex', flexDirection : 'row', padding : '12px'}}>
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className={styles.inputStyle}
                    />
                </div>
                <div>
                    <CiSearch onClick={handleSearch} className={styles.searchIcon} />
                </div>
            </div>
        </div>


    </div>
  )
}

export default NavBar
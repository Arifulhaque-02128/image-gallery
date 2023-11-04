'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Gallery.module.css'

function Card({imgInfo, category, checkedInfo}) {

  const [isHovered, setIsHovered] = useState(false) 

  const [checkedItems, setCheckedItems] = checkedInfo

  const handleCheckboxChange = (e) => {
    const item = e.target.value;
    if (e.target.checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      const updatedItems = checkedItems.filter((checkedItem) => checkedItem !== item);
      setCheckedItems(updatedItems);
    }
  };

  return (
    <div className={styles.cardStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      {
        category === 'featureImg' 
        ?
        <Image
            src={imgInfo}
            alt="Image"
            width={0}
            height={0}
            sizes='10vw'
            style={{width : '100%', height : '50%'}}
            className={`${isHovered || checkedItems.includes(imgInfo) ? styles.imageHoverStyle : styles.imageStyle}`}
        />
        :
        <Image
            src={imgInfo}
            alt="Image"
            width={0}
            height={0}
            sizes='10vw'
            style={{width : '100%', height : '25%'}}
            className={`${isHovered || checkedItems.includes(imgInfo) ? styles.imageHoverStyle : styles.imageStyle}`}
        />
      }
      {
        (isHovered || checkedItems.includes(imgInfo)) &&
        <label className={styles.checkboxStyle}>
          <input
            type="checkbox"
            value={imgInfo}
            checked={checkedItems.includes(imgInfo)}
            onChange={(e) => handleCheckboxChange(e)}
          />
        </label>
      }
    </div>
  )
}

export default Card
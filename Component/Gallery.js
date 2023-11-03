'use client'
import React, { useRef, useState } from 'react'
import styles from './Gallery.module.css'
import Card from './Card'
import { images } from '../helper/helper'
import {MdCheckBox} from 'react-icons/md'

function Gallery() {

  const [currentImages, setCurrentImages] = useState(images);
  const [checkedItems, setCheckedItems] = useState([]);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (e, index) => {
    dragItem.current = index
    setTimeout(() => {
      e.target.style.opacity = 0;
    }, 100)
  }

  const handleDragNdrop = (e) => {
    let _currentImg = [...currentImages]
    const draggedItem = _currentImg.splice(dragItem.current, 1)[0]

    _currentImg.splice(dragOverItem.current, 0, draggedItem);

    dragItem.current = null;
    dragOverItem.current = null;

    setCurrentImages(_currentImg)
    e.target.style.opacity = 1;
  }


  // delete selected files
  const handleDeleteFiles = () => {
    const newImages = currentImages.filter((item) => !checkedItems.includes(item))
    setCurrentImages(newImages)
    setCheckedItems([])
  }

  return (
    <div>
        {
          checkedItems.length > 0 && 

          <div style={{display: 'flex', justifyContent: 'space-between'}}> 
            
            {/* selected files */}
            <div className={styles.messageStyle}>
              <MdCheckBox color='blue' size={30}/>
              <h3> {checkedItems.length} File Selected </h3>
            </div>

            {/* delete button */}
            <button className={styles.btnStyle} onClick={() => handleDeleteFiles()}>
              Delete
            </button>

          </div>

        }

        <div style={{display : 'flex', justifyContent : 'center'}}>
          <div className={styles.container}>
              {
                  currentImages.map((pic, idx) => 
                  <div key={idx} className={(idx === 0 ? `${styles.featureStyle}` : '')}
                    draggable
                    onDragStart={(e) => handleDragStart (e, idx)}
                    onDragEnter={(e) => (dragOverItem.current = idx)}
                    onDragEnd={(e) => handleDragNdrop(e)}
                    onDragOver={(e) => e.preventDefault()}
                  > 

                    <div className={styles.itemStyle} >
                      {/* <h2> {idx} </h2> */}
                        {
                          idx === 0 
                          ? 
                          <Card imgInfo={pic} category={'featureImg'} checkedInfo={[checkedItems, setCheckedItems]} />
                          : 
                          <Card style={dragItem.current === idx ? {display : 'none'} : {}} imgInfo={pic} category={'normalImg'} checkedInfo={[checkedItems, setCheckedItems]} />
                        }
                    </div>
                      
                  </div>
                  )
              }
          </div>
        </div>
      
    </div>
    
  )
}

export default Gallery
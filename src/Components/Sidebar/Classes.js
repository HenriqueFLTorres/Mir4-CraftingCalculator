import React, { useState, useEffect } from 'react'
import classes from '../../Data/Classes.json'

const Classes = ({ itemClass, setItemClass }) => {

  return (
    <div className='Classes'>
        { classes.map((className, index) => (
            <div key={index} className={itemClass === className ? `${className} Active` : className} onClick={ () => setItemClass(className) }>
                <div></div>
                <h3>{className}</h3>
            </div>
        ))}
    </div>
  )
}

export default Classes
import React, { useState, useEffect } from 'react'
import classes from '../../Data/Classes.json'
import classesPT from '../../Data/ClassesPT.json'

const Classes = ({ itemClass, setItemClass, language }) => {

  useEffect(() => {

    if ( localStorage.getItem("Class") === null ) {
      setItemClass(0)
      localStorage.setItem("Class", itemClass)
    }

    setItemClass(Number(localStorage.getItem("Class")))

  }, [])

  useEffect(() => {

    localStorage.setItem("Class", itemClass)

  }, [itemClass])

  return (
    <div className='Classes'>
        { ( language === "PT-BR" ? classesPT : classes ).map((className, index) => (
            <div key={index} className={index === itemClass ? `${className} Active` : className} onClick={ () => setItemClass(index) }>
                <div></div>
                <h3>{className}</h3>
            </div>
        ))}
    </div>
  )
}

export default Classes
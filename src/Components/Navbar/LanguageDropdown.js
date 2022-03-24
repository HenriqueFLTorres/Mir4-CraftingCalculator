import React, { useState } from 'react'

const LanguageDropdown = ({ language, setLanguage }) => {
    const [dropdownActive, setDropdownActive] = useState(false)

  return (
      <div className={`Languages ${dropdownActive}`}>
        <div className='LanguageDropdown' onClick={() => setDropdownActive(!dropdownActive)}>
            <p>{language}</p>
        </div>
        <div className='Choices'>
            <p onClick={() => {
                setLanguage("EN") 
                setDropdownActive(!dropdownActive)
            }}>English</p>
            <p onClick={() => {
                setLanguage("PT-BR") 
                setDropdownActive(!dropdownActive)
            }}>PT-BR</p>
        </div>
      </div>
  )
}

export default LanguageDropdown
import React from 'react'
import BPItemS from './BPItemS'

const DefaultItems = ({ myBackpack, language }) => {


  return (
      <div className='DefaultItems'>
          <BPItemS myBackpack={myBackpack} language={language} name={language === "PT-BR" ? "Cobre" : "Copper Coin"} image={language === "PT-BR" ? "Cobre" : "Copper_Coin"} />
          <BPItemS myBackpack={myBackpack} language={language} name={language === "PT-BR" ? "Aço Negro" : "Dark Steel"} image={language === "PT-BR" ? "Aço_Negro" : "Dark_Steel"} />
          <BPItemS myBackpack={myBackpack} language={language} name={language === "PT-BR" ? "Energia" : "Energy"} image={language === "PT-BR" ? "Energia" : "Energy"} />
      </div>
    )
}

export default DefaultItems
import React, { useState, useEffect } from 'react'
import checkValue from '../Utils/checkValue'
import BPItem from './BPItem'
import BPItemS from './BPItemS'

const DefaultItems = ({ myBackpack }) => {


  return (
      <div className='DefaultItems'>
          <BPItemS myBackpack={myBackpack} name="Copper Coin" image="Copper_Coin" />
          <BPItemS myBackpack={myBackpack} name="Dark Steel" image="Dark_Steel" />
          <BPItemS myBackpack={myBackpack} name="Energy" image="Energy" />
      </div>
    )
}

export default DefaultItems
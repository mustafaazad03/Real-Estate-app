import React, { useState } from 'react'
import Data from '../components/Data'
import Filter from './Filter';
const Body = () => {
    const [info,setInfo] = useState(Data);
  return (
    <>
      <Filter/>
    </>
  )
}

export default Body

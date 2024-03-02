import React from 'react'
import B from './B'

function A() {
  return (
   <>
 <div> I am <span style={{color:"yellow", fontWeight:"bold"}}> A </span> My Parrant is <span style={{color:"blue"}}>App</span> </div> <br />
   <B/>
   </>
  )
}

export default A
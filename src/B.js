import React from 'react'
import C from './C'

function B() {
  return (
  <>
 <div style={{background:"orange",color:"black",marginRight:"10%"}}> I am <span style={{color:"white", fontWeight:"bold"}}>B</span> My Parrant is <span style={{color:"blue"}}>A</span> </div><br/>

 <C/>
  </>
  )
}

export default B
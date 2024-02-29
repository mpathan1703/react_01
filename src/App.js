import React from 'react'
import Heading  from './components/Heading'
import A from './A'
function App() {
  return (
 <>
  <div style={{background:"darkcyan"}}> I am <span style={{color:"pink", fontWeight:"bold"}}> App </span> My Parrant is <span style={{color:"white"}}>Index </span> </div><br/>

<Heading name="Maivish" age={19} city="Bhokardan" state="Maharashtra"/><br/>
<Heading name="Mayuri" age={19} city="Sambhajinagar" state="Maharashtra"/><br/>
<Heading name="Lakshmi" age={19} city="Jalgaon" state="Maharashtra"/><br/>
<Heading name="Roshni" age={19} city="Nagpur" state="Maharashtra"/><br/>


 <A/>
 </>
  )
}

export default App
import React from 'react'
const getRandomNum = () => {
  const a=Math.ceil(Math.random()*1000)
  console.log(a)
}
getRandomNum()
const Play = () => {
  return (
    <div className='playpage'>
      <div className="firstpage">
        <div className="siteName">Make  the  number</div>
        <div className="randomNum">Your Random Number is{`${a}`}</div>
      </div>
    </div>
  )
}

export default Play

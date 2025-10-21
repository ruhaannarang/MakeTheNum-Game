import React from 'react'

const Homepage = () => {
  return (
    <div>
       <div className='body'>
        <div className="firstpage">

          <div className="siteName">Improve your calculation</div>
          <div className="rulesSection">
            <div className="rulesHeading">Rules</div>
            <div className="rulesPoints">
              <ul>
                <li className="rules">You will get a random number</li>
                <li className="rules">You have to make that number</li>
                <li className="rules">Your initial value will be 0</li>
                <li className="rules">You will have 4 options: +1 , -1 ,×2,÷2</li>
                <li className="rules">Using these you have to make the given number</li>
              </ul>
            </div>
          </div>
        <div>
            <a className='startbtn' href="/play">Start</a>
          {/* <button className='startbtn'>START</button> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

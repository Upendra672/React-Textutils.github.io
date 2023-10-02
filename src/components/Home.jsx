import React from 'react'

const Home = (props) => {
  return (
    <>
        <div className="home-container">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`} >Click that Fucking Home Button 👅🍆💦</h1>
        </div>
    </>
  )
}

export default Home
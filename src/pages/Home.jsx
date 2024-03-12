import React from 'react'
import Header from '../components/Header/Header'
import macimg from '../assets/macimg.jpg'
import imacimg from '../assets/imacimg.jpg'

const Home = () => {
  return (
    <div>
      <Header />
    <div className='div1'>
      <img src={macimg} alt="" />
      <div className='div2'> 
      <h1 id='w1'>MacBook Pro</h1>
      <p id='w2'>Mind-Blowing. Head Turning.</p>
      
      <nav>
      <a href="Learn more">Learn more {'>'}</a>
      </nav>
      </div>
    </div>
    <div className='div3'>
      <img src={imacimg} alt="" />
      <div className='div4'>
        <h1 id='w1'>iMac</h1>
        <p id='w2'>Packed with more juice.</p>
        <nav>
        <a href="Learn more">Learn more {'>'}</a>
        </nav>
      </div>

    </div>

    </div>
  )
}

export default Home
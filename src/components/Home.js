import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="home">
          <div className="home-text">
          <h2>Get hired from home!</h2>
          <h1>We help you to<br/>keep up with your<br/>ambition</h1>
          <p>Sign up to boost your career..</p>

          <div className="email-box">
            <input type ="email" placeholder="Enter your email..." />
            <a href="/#" ><i className='bx bxs-fast-forward-circle'></i></a>
          </div>
          </div>

          <div className="home-img">
          <img src="assets/images/profile.png" alt="" />
          </div>

          <a href="#services" className="scroll-down">
          <i className='bx bxs-mouse-alt'></i>
          Scroll Down
          <i className='bx bx-down-arrow-alt'></i>
          </a>
          </section>
    </div>
  )
}

export default Home

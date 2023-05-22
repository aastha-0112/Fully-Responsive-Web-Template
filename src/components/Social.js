import React from 'react'

const Social = () => {
  return (
    <div>
      <div className="connect" id = "connect">
          <h1>Join our email</h1>
          <div className="email-box">
          <input type ="email" placeholder="Enter your email..." />
            <a href="/#" ><i className='bx bxs-fast-forward-circle'></i></a>
          </div>

          <div className="social">
          <a href="/#"><i className='bx bxl-facebook' ></i></a>
          <a href="/#"><i className='bx bxl-twitter' ></i></a>
          <a href="/#"><i className='bx bxl-instagram' ></i></a>
          <a href="/#"><i className='bx bxl-linkedin' ></i></a>
          </div>
          </div>

          <div className="copyright">
          <p>&#169; Copyright Emplo-Aid </p>
          <p>2023 All Rights Reserved</p>
          </div>
    </div>
  )
}

export default Social

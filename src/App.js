import './App.css';

function App(){

  function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
    }

  return(
    <div>
      <div>
        <nav>
          <a href="/#" className="logo"><i className='bx bx-play'></i>Emplo-Aid</a>
          <div className="toggle" onClick={toggleMenu}></div>

          <ul className="menu">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#team" onClick={toggleMenu}>Our Team</a></li>
            <li><a href="#clients" onClick={toggleMenu}>Clients</a></li>
            <li><a href="#connect" class="active-btn" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
          </nav>

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

          <section id = "services">
          <div className="heading">
          <h2>Get Employed with Emplo-Aid</h2>
          <h1>We are an aid to your employment</h1>
          </div>

          <div className="services-content">
          <div className="box">
            <img src="assets/images/icon.png" alt="" />
            <span>Employment Generation</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque aperiam unde commodi accusamus exercitationem libero quia aliquam a accusantium atque rem repudiandae, similique tempora esse impedit culpa dicta officia?</p>
          </div>

          <div className="box">
            <img src="assets/images/icon.png" alt="" />
            <span>Job Estimation</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque aperiam unde commodi accusamus exercitationem libero quia aliquam a accusantium atque rem repudiandae, similique tempora esse impedit culpa dicta officia?</p>
          </div>

          <div className="box">
            <img src="assets/images/icon.png" alt="" />
            <span>Our Promise</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque aperiam unde commodi accusamus exercitationem libero quia aliquam a accusantium atque rem repudiandae, similique tempora esse impedit culpa dicta officia?</p>
          </div>

          <div className="box">
            <img src="assets/images/icon.png" alt="" />
            <span>Employment Benefits</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque aperiam unde commodi accusamus exercitationem libero quia aliquam a accusantium atque rem repudiandae, similique tempora esse impedit culpa dicta officia?</p>
          </div>

          <div className="box">
            <img src="assets/images/icon.png" alt="" />
            <span>Our Guarantee</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque aperiam unde commodi accusamus exercitationem libero quia aliquam a accusantium atque rem repudiandae, similique tempora esse impedit culpa dicta officia?</p>
          </div>

          <div className="box">
            <img src="assets/images/icon.png" alt="" />
            <span>Team Benefits</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque aperiam unde commodi accusamus exercitationem libero quia aliquam a accusantium atque rem repudiandae, similique tempora esse impedit culpa dicta officia?</p>
          </div>
          </div>
          </section>

          <section id="team">
          <div className="heading">
          <h2>Get Employed with Emplo-Aid</h2>
          <h1>Our Technical Experts</h1>
          </div>

          <div className="team-content">
          <div className="team-box">
            <img src="assets/images/model1.png" alt="" />
            <h1>Aastha Shrotriya</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia eligendi modi velit ratione eum officia molestias corrupti, a sit! Asperiores reprehenderit a veritatis fugit! Debitis natus aut iure dolor.</p>
            <a href="/#">Learn More</a>
          </div>

          <div className="team-box">
            <img src="assets/images/model2.png" alt="" />
            <h1>Vibhu Mishra</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia eligendi modi velit ratione eum officia molestias corrupti, a sit! Asperiores reprehenderit a veritatis fugit! Debitis natus aut iure dolor.</p>
            <a href="/#">Learn More</a>
          </div>
          </div>
          </section>

          <section id="clients">
          <div className="heading">
          <h2>Get Employed with Emplo-Aid</h2>
          <h1>What our clients say</h1>
          </div>

          <div className="clients-content">
          <div className="client-box">
            <img src="assets/images/model1.png" alt="" />
            <h1>Aastha Shrotriya</h1>
            <h2>Founder & CEO, Emplo-Aid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quia illo libero, minima exercitationem a enim quod iusto, eveniet at quas officia maiores sit beatae odio nisi, quam consequuntur. Quas.</p>
          </div>

          <div className="client-box color">
            <img src="assets/images/model2.png" alt="" />
            <h1>Vibhu Mishra</h1>
            <h2>CTO, Emplo-Aid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quia illo libero, minima exercitationem a enim quod iusto, eveniet at quas officia maiores sit beatae odio nisi, quam consequuntur. Quas.</p>
          </div>
          </div>
          </section>

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
    </div>
    );
  }

export default App;

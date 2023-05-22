import React from 'react'

const Clients = () => {
  return (
    <div>
      <section id="clients">
          <div className="heading">
          <h2>Get Employed with Emplo-Aid</h2>
          <h1>What our clients say</h1>
          </div>

          <div className="clients-content">
          <div className="client-box">
            <img src="assets/images/model1.jpg" alt="" />
            <h1>Jessica Hales</h1>
            <h2>Founder & CEO, Emplo-Aid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quia illo libero, minima exercitationem a enim quod iusto, eveniet at quas officia maiores sit beatae odio nisi, quam consequuntur. Quas.</p>
          </div>

          <div className="client-box color">
            <img src="assets/images/model2.jpg" alt="" />
            <h1>Alex Huges</h1>
            <h2>CTO, Emplo-Aid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quia illo libero, minima exercitationem a enim quod iusto, eveniet at quas officia maiores sit beatae odio nisi, quam consequuntur. Quas.</p>
          </div>
          </div>
          </section>
    </div>
  )
}

export default Clients

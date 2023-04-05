import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="/assets/about1.png" alt="About" 
                    className='w-75 mt-5' />
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About Us</h3>
                    <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio repudiandae quos suscipit consequuntur deleniti laudantium fugit velit eligendi vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam incidunt sequi sapiente nemo aperiam expedita doloribus enim, ex nulla natus tenetur quaerat quasi quisquam et quo est asperiores reprehenderit similique dolores voluptates obcaecati ipsam! Non eaque reprehenderit ea assumenda laborum iusto at quasi. Vel beatae consequuntur aperiam, quibusdam cupiditate commodi.</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2">Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About;
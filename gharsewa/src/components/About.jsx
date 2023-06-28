import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/about1.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Nepalese make a lot of n searches across the internet each month
                to search the right tradesperson. Ghar Sewa helps you to find
                and connect to such businesses and services. But the world is
                changing. It’s faster, more demanding. Time is even more
                precious than ever before. So to meet those challenges, Ghar
                Sewa has been born.
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

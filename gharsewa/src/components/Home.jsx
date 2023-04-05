import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Welcome to Ghar Sewa
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente est corrupti in nobis consequatur illo repudiandae iure
                quas saepe provident. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quaerat aperiam laborum ad vero? Inventore,
                quas? Obcaecati quam nemo reiciendis doloremque voluptatum! Amet
                sed, laudantium tenetur quibusdam fuga sapiente beatae! Enim ut
                exercitationem maiores repellendus repudiandae maxime unde
                similique sunt perspiciatis.
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Quote
                </NavLink>
                <NavLink
                  to="/services"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Our Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

import React, { useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };
  // dsa;

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variable
    const { name, email, message, password } = msg;
    try {
      //It is submitted on port 3000 by default
      //which is front end but we need toπ
      //submit it on backend which is on
      // Port 3001. So we need Proxy.
      const res = await fetch("http://localhost:3002/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message not sent. Try again.");
      } else {
        window.alert("Msg Sent");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact.jpg" alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Phuruwa Ksheten Sherpa"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={msg.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

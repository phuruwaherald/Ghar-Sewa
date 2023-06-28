import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { NavLink } from "react-router-dom";
import ServiceList from "./Servicelist";
import "./servicelist.css";
import axios from "axios";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const loggedinuser = JSON.parse(localStorage.getItem("user"));

  const handleSearch = async () => {
    console.log(searchTerm);

    // api call
    const res = await axios.get(
      "http://localhost:3002/users?role=" + searchTerm
    );

    setSearchResult(res?.data);
  };

  const handleBooking = () => {
    console.log("start booking");
  };

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
                Whether you need a builder or a locksmith, a hairdresser or a
                florist, Ghar Sewa has thousands of local businesses ready to
                quote your job. Compare multiple quotes so you get the right
                fit, the first time.
              </p>
              <div className="d-flex bg-white my-5 rounded-5">
                <input
                  className="form-control "
                  placeholder="Search business type"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
              <div className="w-full my-5">
                <div className="card_container">
                  {searchResult?.length > 0 &&
                    searchResult?.map((d) => {
                      console.log(d?.isBooked?.customerId, loggedinuser);
                      return (
                        <ServiceList
                          username={d.username}
                          email={d.email}
                          services={d.services}
                          phone={d.phone}
                          handleBooking={handleBooking}
                          isBooked={
                            d?.isBooked?.customerId === loggedinuser?._id
                          }
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
};

export default Home;

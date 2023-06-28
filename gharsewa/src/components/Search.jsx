import React from "react";

const Search = () => {
  return (
    <div>
      <section id="search">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">Showing results</h3>
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
    </div>
  );
};

export default About;

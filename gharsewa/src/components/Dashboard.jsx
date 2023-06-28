import React from "react";

const Dashboard = () => {
  return (
    <div>
      <section id="dashboard">
        <div className="container my-4 py-4">
          {/* <div className="row"> */}
          {/* <div className="col-md-6"> */}
          <h1 className="display-6 mb-2">
            <b>Dashboard</b>
          </h1>
          <hr className="w-50" />
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Dashboard;

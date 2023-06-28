import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  // const navigate = useNavigate()
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (auth) {
            return <Component {...props} />;
          } else {
            return (
              <Navigate to={{ path: "/", state: { from: props.location } }} />
            );
          }
        }}
      />
    </div>
  );
};

export default ProtectedRoute;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       auth ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

// export default ProtectedRoute;

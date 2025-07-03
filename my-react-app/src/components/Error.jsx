import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="job-details">
      <h3>An Error Occur</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go To Home Page</button>
    </div>
  );
};

export default Error;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div className="jobs pb-10">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const response = await fetch("http://localhost:3000/jobs");
  if (!response.ok) {
    throw Error("Could not found job list");
  }
  return response.json();
};

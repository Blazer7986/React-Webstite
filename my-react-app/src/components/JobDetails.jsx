import React from "react";
import { useLoaderData } from "react-router-dom";
//import { useParams } from "react-router-dom";

const JobDetails = () => {
  //const { id } = useParams();

  const jobDetails = useLoaderData();

  return (
    <div className="job-details">
      <p>
        <b>Job Title: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Job Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Job Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Job Description: </b> Looking for job.
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDeatilsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:3000/jobs/" + id);
  if (!response.ok) {
    throw Error("Could not find job details.");
  }
  return response.json();
};

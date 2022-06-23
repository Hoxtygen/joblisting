import React from "react";
import Investor from "./Investor";

export default function JobCard({ job }) {
  return (
    <div className="jobcard">
      <p>{job.company.name} </p>
      <h5>{job.title} </h5>
      <h5>{job.city} </h5>
      <div className="">
        <h5>Investors</h5>
        <>
          {job.company.company_investors.map((investor, index) => (
            <Investor key={index} name={investor.investor.name} />
          ))}
        </>
      </div>
    </div>
  );
}

import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS_TITLE } from "../queries/Jobs";
import JobCard from "./JobCard";

const JobList = ({ query }) => {
  const { loading, error, data } = useQuery(QUERY_JOBS_TITLE, {
    variables: {
      title: `%${query.title}%`,
      city: `%${query.city}%`,
      company: `%${query.company}%`,
      investor: `%${query.investor}%`
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      {data &&
        data.jobs.map((job) => (
          <Fragment key={job.id}>
            <JobCard job={job} />
          </Fragment>
        ))}
    </div>
  );
};

export default JobList;

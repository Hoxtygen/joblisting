import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS_TITLE } from "../queries/Jobs";
import JobCard from "./JobCard";
import Loader from "./Loader";
import NoResult from "./NoResult";
import Error from "./Error";

const JobList = ({ query }) => {
  const { loading, error, data } = useQuery(QUERY_JOBS_TITLE, {
    variables: {
      title: `%${query.title}%`,
      city: `%${query.city}%`,
      company: `%${query.company}%`,
      investor: `%${query.investor}%`
    },
  });
  if (loading) return <Loader/>;
  if (error) return <Error errorMessage={error.message} />;
  if(data&& data.jobs.length === 0) return <NoResult />
  return (
    <div className="jobs">
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

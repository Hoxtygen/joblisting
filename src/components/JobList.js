import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../queries/Jobs";
import JobCard from "./JobCard";

const JobList = (props) => {
  const { loading, error, data } = useQuery(QUERY_JOBS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.jobs.map((job) => (
    <Fragment key={job.id}>
      <JobCard job={job} />
    </Fragment>
  ));
};

JobList.propTypes = {};

export default JobList;

import { gql } from "apollo-boost";

const QUERY_JOBS = gql`
  query fetchJobs {
    jobs {
      id
      title
      city
      company {
        name
        company_investors {
          company {
            name
          }
        }
      }
    }
  }
`;

export { QUERY_JOBS };

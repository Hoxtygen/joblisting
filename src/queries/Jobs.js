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
          investor {
            name
          }
        }
      }
    }
  }
`;



const QUERY_JOBS_TITLE = gql`
  query ($title: String!, $company: String!, $city: String!, $investor: String!) {
    jobs(
      where: {
        _and: [
          { title: { _ilike: $title } },
          { company: { name: { _ilike: $company } } },
          { city: { _ilike: $city } },
          {company: {company_investors:{investor:{name: {_ilike: $investor}}}}}
          
        ]
      }
    ) {
      id
      title
      city
      company {
        name
        id
        company_investors {
          investor {
            name
            id
          }
        }
      }
    }
  }
`;
const FORM_QUERY =gql `
query fetchFormInputs {
  jobs {
    city
    company {
      name
      company_investors {
        investor {
          name
        }
      }
    }
  }
}
`
export { QUERY_JOBS, QUERY_JOBS_TITLE, FORM_QUERY };

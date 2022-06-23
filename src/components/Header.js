import React from "react";
import { TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useQuery } from "@apollo/client";
import { FORM_QUERY } from "../queries/Jobs";

export default function Header({ formData, handleOnChange, handleSubmit }) {
  const { title, city, company, investor } = formData;
  const { data } = useQuery(FORM_QUERY);
  /**
   * Add comment as to why fetching was done here and to 
   * why autocomplete wasn't used.
   */

  const rawCities =
    data &&
    data.jobs
      .map((job) => job.city)
      .sort((a, b) => (b.toLowerCase() < a.toLowerCase() ? 1 : -1));
  const uniqueCities = [...new Set(rawCities)];
  const rawCompanies =
    data &&
    data.jobs
      .map((job) => job.company.name)
      .sort((a, b) => (b.toLowerCase() < a.toLowerCase() ? 1 : -1));
  const uniqueCompanies = [...new Set(rawCompanies)];
  const rawInvestors =
    data &&
    data.jobs
      .map((invest) => invest.company.company_investors)
      .flat()
      .map((item) => item.investor.name)
      .sort((a, b) => (b.toLowerCase() < a.toLowerCase() ? 1 : -1));
  const uniqueInvestors = [...new Set(rawInvestors)];
  console.log("Investors:", uniqueInvestors);
  return (
    <header>
      <div className="header-inner">
        <h2>Your one stop shop for all jobs </h2>
      </div>
      <div className="form-wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <TextField
            name="title"
            id="title"
            label="Job Title"
            placeholder="Search job by title"
            onChange={handleOnChange}
            value={title}
          />
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <TextField
              value={company}
              onChange={handleOnChange}
              label="Company"
              name="company"
              select
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              {uniqueCompanies.map((companyItem, index) => (
                <MenuItem value={companyItem} key={`${index}-companyItem`}>
                  {companyItem}{" "}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <TextField
              label="City"
              value={city}
              name="city"
              variant="outlined"
              select
              onChange={handleOnChange}
            >
              {uniqueCities.map((cityy, index) => (
                <MenuItem value={cityy} key={`${index}-city`}>
                  {cityy}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <TextField
              value={investor}
              onChange={handleOnChange}
              label="Investor"
              name="investor"
              select
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              {uniqueInvestors.map((companyInvestor, index) => (
                <MenuItem value={companyInvestor} key={`${index}-companyInvestor`}>
                  {companyInvestor}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Button onClick={handleSubmit} variant="outlined">
            Submit
          </Button>
        </form>
      </div>
    </header>
  );
}

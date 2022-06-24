import React from "react";
import { TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useQuery } from "@apollo/client";
import { FORM_QUERY } from "../queries/Jobs";

export default function Header({
  formData,
  handleOnChange,
  handleSubmit,
  handleReset,
}) {
  const { title, city, company, investor } = formData;
  const { data } = useQuery(FORM_QUERY);
  /**
   * Fetching of data was done here to keep 
   * the list updated at all times independent of filtering and searcing 
   * results
   * 
   * Could have used autocomplete instead of select but that'd limit the user to 
   * only the company they know of.They should be able to see all companies.
   * 
   * 
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
  return (
    <header>
      <div className="header-inner">
        <h2>Your one stop shop for all jobs </h2>
      </div>
      <div className="form-wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-input">
            <TextField
              name="title"
              id="title"
              label="Job Title"
              placeholder="Search job by title"
              onChange={handleOnChange}
              value={title}
              fullWidth
              margin="normal"
            />
          </div>
          <div className="form-input">
            <TextField
              value={company}
              onChange={handleOnChange}
              label="Company"
              name="company"
              select
              fullWidth
              margin="normal"
            >
              <MenuItem selected value="">
                <em></em>
              </MenuItem>
              {uniqueCompanies.map((companyItem, index) => (
                <MenuItem value={companyItem} key={`${index}-companyItem`}>
                  {companyItem}{" "}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="form-input">
            <TextField
              label="City"
              value={city}
              name="city"
              variant="outlined"
              select
              onChange={handleOnChange}
              fullWidth
              margin="normal"
            >
              {uniqueCities.map((cityy, index) => (
                <MenuItem value={cityy} key={`${index}-city`}>
                  {cityy}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="form-input">
            <TextField
              value={investor}
              onChange={handleOnChange}
              label="Investor"
              name="investor"
              select
              fullWidth
              margin="normal"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              {uniqueInvestors.map((companyInvestor, index) => (
                <MenuItem
                  value={companyInvestor}
                  key={`${index}-companyInvestor`}
                >
                  {companyInvestor}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="">
            <Button onClick={handleSubmit} variant="outlined">
              Submit
            </Button>
            <Button
              value="Reset"
              type="reset"
              onClick={() => handleReset()}
              variant="outlined"
              className="reset"
              style={{ marginLeft: "10px" }}
            >
              reset
            </Button>
          </div>
        </form>
      </div>
    </header>
  );
}

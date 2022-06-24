import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import ApolloClient from "./apollo";
import JobList from "./components/JobList";
import Header from "./components/Header";

function App() {

  /**
   * Form data and GraphQL queries were separated because every keystroke
   * while filling the form triggers a refetch of data and page reload.
   * GraphQL queries are updated with the submit button.
   */
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    city: "",
    investor: "",
  });
  const [query, setQuery] = useState({
    title: "",
    company: "",
    city: "",
    investor: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setQuery({ ...formData });
  };
  const handleReset = () => {
    setFormData({
      title: "",
      company: "",
      city: "",
      investor: "",
    });
    setQuery({
      title: "",
      company: "",
      city: "",
      investor: "",
    });
  };
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
        <section>
          <div className="">
            <Header
              formData={formData}
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
            />
          </div>
          <div className="job-wrapper">
            <JobList query={query} />
          </div>
        </section>
      </div>
    </ApolloProvider>
  );
}

export default App;

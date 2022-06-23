import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import ApolloClient from "./apollo";
import JobList from "./components/JobList";
import Header from "./components/Header";

function App() {
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
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
        <section>
          <div className="">
            <Header
              formData={formData}
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
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

import React from "react";
import { ApolloProvider } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "./apollo";
import JobList from "./components/JobList";
import Header from "./components/Header";

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
      <Header />
      <section>
        <div className="job-wrapper">
          <JobList />
        </div>

      </section>
      </div>
    </ApolloProvider>
  );
}

export default App;

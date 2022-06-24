import React from "react";

export default function Error({ errorMessage }) {
  return (
    <div className="error">
      <h5>{errorMessage}</h5>
    </div>
  );
}

import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const MangaSearchForm = ({ saveTerm }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    saveTerm(term);
    setTerm("");
  };

  return (
    <div
      style={{
        width: "45%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 40,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Filter"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </Form>
    </div>
  );
};

export default MangaSearchForm;

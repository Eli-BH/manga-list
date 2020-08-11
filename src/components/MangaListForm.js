import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const MangaListForm = ({ addManga }) => {
  const [manga, setManga] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!manga) return;
    addManga(manga);
    setManga("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Manga name"
          onChange={(e) => setManga(e.target.value)}
          value={manga}
        />
      </div>
    </Form>
  );
};

export default MangaListForm;

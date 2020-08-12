import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";

const MangaList = ({ mangas, deleteManga, completeManga, mangaChapter }) => {
  const [chapter, setChapter] = useState("");
  const [index, setIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    mangaChapter(index, chapter);
    setChapter("");
  };

  return (
    <ul className="list-group">
      {mangas.map((manga, index) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Button variant="info" onClick={() => completeManga(index)}>
            complete
          </Button>

          <div
            style={{
              textDecoration: manga.complete ? "line-through" : "",
              backgroundColor: manga.complete ? "#b3e6ff" : "",
            }}
          >
            <h3>{manga.text.trim()} </h3>
          </div>
          <h4>chapter: {manga.chapter}</h4>

          <select
            class="custom-select"
            id="inputGroupSelect01"
            style={{ width: "10%" }}
          >
            <option selected>Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <DropdownButton
            id="dropdown-basic-button"
            title="Chapter"
            variant="outline-primary"
            size="sm"
            key={index}
          >
            <div
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="chapter"
                  onClick={() => setIndex(index)}
                  onChange={(e) => {
                    setChapter(e.target.value);
                  }}
                  value={chapter}
                />
              </Form>
            </div>
          </DropdownButton>

          <Button variant="danger" onClick={() => deleteManga(index)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default MangaList;

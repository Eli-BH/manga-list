import React from "react";
import Button from "react-bootstrap/Button";

const MangaList = ({ mangas, deleteManga, completeManga }) => {
  return (
    <ul className="list-group">
      {mangas.map((manga, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={index}
        >
          <Button variant="info" onClick={() => completeManga(index)}>
            complete
          </Button>
          <div style={{ textDecoration: manga.complete ? "line-through" : "" }}>
            {manga.text.trim()}
          </div>

          <span></span>
          {(index + 1).toString()}
          <Button variant="danger" onClick={() => deleteManga(index)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default MangaList;

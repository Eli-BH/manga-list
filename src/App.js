import React from "react";
import { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import MangaListForm from "./components/MangaListForm";
import MangaList from "./components/MangaList";

const App = () => {
  const [manga, setManga] = useState([]);

  const addManga = (text) => {
    const newList = [...manga, { text, complete: false }];
    setManga(newList);
    // console.warn(entry); test
  };

  const deleteManga = (id) => {
    const newList = [...manga];
    newList.splice(id, 1);
    //could try newList.map((id) => id !== index)
    setManga(newList);
  };

  const completeManga = (index) => {
    const newList = [...manga];
    newList[index].complete = true;
    setManga(newList);
  };

  return (
    <div className="container">
      <Jumbotron>
        <h1>Manga List</h1>
      </Jumbotron>
      <MangaList
        mangas={manga}
        deleteManga={deleteManga}
        completeManga={completeManga}
      />
      <MangaListForm addManga={addManga} />
      {console.log(manga)}
    </div>
  );
};

export default App;

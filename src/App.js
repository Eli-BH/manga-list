import React from "react";
import { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import MangaListForm from "./components/MangaListForm";
import MangaList from "./components/MangaList";
import MangaSearchForm from "./components/MangaSearchForm";

const App = () => {
  const [manga, setManga] = useState([]);
  const [term, setTerm] = useState("");

  const addManga = (text) => {
    const newList = [...manga, { text, complete: false }];
    setManga(newList);
    // console.warn(entry); test
  };

  const deleteManga = (id) => {
    const newList = [...manga];
    newList.splice(id, 1);
    setManga(newList);
    //could try newList.map((id) => id !== index)
  };

  const completeManga = (index) => {
    const newList = [...manga];
    newList[index].complete = true;
    setManga(newList);
  };

  const searchFilter = (text) => {
    setTerm(text);
  };

  let sTerm = manga.filter((txt) => txt.text.includes(term));

  return (
    <div className="container">
      <Jumbotron>
        <h1>Manga List</h1>
      </Jumbotron>

      <MangaSearchForm saveTerm={searchFilter} />

      <MangaList
        mangas={term.length > 0 ? sTerm : manga}
        deleteManga={deleteManga}
        completeManga={completeManga}
      />
      <MangaListForm addManga={addManga} />
      {console.log(manga)}
    </div>
  );
};

export default App;

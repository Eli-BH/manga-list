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
    const newList = [...manga, { text, complete: false, chapter: 1 }];
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
    newList[index].complete = !newList[index].complete;
    setManga(newList);
  };

  const updateChapter = (index, chpt) => {
    const newList = [...manga];
    newList[index].chapter = chpt;
    setManga(newList);
  };

  const searchFilter = (text) => {
    setTerm(text);
  };

  let sTerm = manga.filter((txt) => txt.text.includes(term));

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Manga List</h1>
        <hr className="my-4" />
        <p>A simple list to save your manga, it can also be used for books</p>
      </div>

      <MangaSearchForm saveTerm={searchFilter} />

      <MangaList
        mangas={term.length > 0 ? sTerm : manga}
        deleteManga={deleteManga}
        completeManga={completeManga}
        mangaChapter={updateChapter}
      />
      <MangaListForm addManga={addManga} />
      {console.log(manga)}
    </div>
  );
};

export default App;

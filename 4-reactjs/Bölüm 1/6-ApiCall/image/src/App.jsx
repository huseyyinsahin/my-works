import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import axios from "axios";
import searchImages from "./api";
import Imagelist from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <Imagelist imagesPlaceholder={images} />
    </div>
  );
}

export default App;

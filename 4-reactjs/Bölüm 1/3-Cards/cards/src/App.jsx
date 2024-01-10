import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      {/* <image src={Angular} alt="" /> */}
      <Course
        image={Angular}
        title="Angular"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
      />
      <Course
        image={Bootstrap}
        title="Bootstrap 5"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
      />
      <Course
        image={Csharp}
        title="Komple Web"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
      />
      <Course
        image={KompleWeb}
        title="Front end"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
      />
    </div>
  );
}

export default App;

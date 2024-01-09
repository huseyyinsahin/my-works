import "./App.css";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <Course
        title="Angular"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
      />
      <Course title="Bootstrap 5"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo." />
      <Course title="Komple Web"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo." />
      <Course title="Front end"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo." />
    </div>
  );
}

export default App;

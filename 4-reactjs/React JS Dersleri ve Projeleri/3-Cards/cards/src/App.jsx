import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarım</p>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Angular}
                  title="Angular"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
                />
              </div>
              <div className="column">
                <Course
                  image={Bootstrap}
                  title="Bootstrap 5"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
                />
              </div>
              <div className="column">
                <Course
                  image={Csharp}
                  title="Komple Web"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
                />
              </div>
              <div className="column">
                <Course
                  image={KompleWeb}
                  title="Front end"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor tenetur, ullam non velit aliquam excepturi accusantium provident eos, repellat atque consectetur, exercitationem voluptatem quas aperiam? Praesentium, magnam dolorem! Quo."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

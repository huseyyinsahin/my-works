import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import Request from "./components/Request";

function App() {
  const instructor = {
    firstName: "Hüseyin",
    lastName: "Şahin",
  };
  const instructorList = [
    {
      firstName: "Hüseyin",
      lastName: "Şahin",
    },
    { firstName: "osman", lastName: "Şahin" },
    { firstName: "necati", lastName: "Şahin" },
  ];
  return (
    <>
      <div className="App">
        <Home name="Hüseyin Şahin" courseNumber={15} isBest={true} />
        <Instructor instructorNameLastName={instructor} />
        <InstructorList instructorNameLastNameList={instructorList} />
        <Request status="success"/>
      </div>
    </>
  );
}

export default App;

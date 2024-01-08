import "./App.css";

function App() {
  const nameSurname = "Hüseyin Şahin";
  const students = 43000;
  const dogrumu = false;
  const date = "date";
  const url = "https://picsum.photos/250/250";
  return (
    // <div>
    // //   <h1>İsim Soyisim : {nameSurname}</h1>
    // //   <p>Ogrenci Sayısı {students}</p>
    // //   <p>Doğrumu : {dogrumu}</p>
    // //   <input type="text" />

    // //   {dogrumu ? <p>Ogrenci Sayısı</p> : <p>Kurs Sayısı</p>}

    // //   <input type={date} />
    // //   <img src={url} alt="" />

    // </div>
    <div
      style={{
        width: "250px",
        height: "250px",
        backgroundColor: "blue",
        fontSize: "30px",
      }}
    ></div>
  );
}

export default App;

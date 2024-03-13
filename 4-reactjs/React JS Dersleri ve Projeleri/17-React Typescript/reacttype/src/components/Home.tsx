import React from "react";
import {DateComing} from './propstypes'



function Home(props: DateComing) {
  return (
    <div>
      {props.name} Hoşgeldiniz. Kurs sayısı: {props.courseNumber}
      {props.isBest ? (
        <p> En iyi react eğitimi bu eğitimim</p>
      ) : (
        <p> En iyi react eğitimi bu eğitimim değil</p>
      )}
    </div>
  );
}

export default Home;

import Card from "./components/Card";
import Song from "./components/Song";
import { list_song_imgs } from "./data/data.js";
import { list_chill_imgs } from "./data/data.js";
import "./App.css";
import Chill from "./components/Chill";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card song="BÀI HÁT" album="ALBUM" />
      </header>

      <div className="body">
        <div id="wrapper">
          {list_song_imgs.map((list, index) => {
            return (
              <Song
                song__img={list.img}
                info__name={list.name}
                info__singer={list.singer}
                info__time={list.time}
                key={index}
              />
            );
          })}
        </div>
        <div id="container">
          <h2>Cứ Chill Thôi</h2>
          <div id="container__child">
            {list_chill_imgs.map((list, index) => {
              return (
                <Chill
                  chill__img={list.img}
                  chill__title={list.title}
                  chill__content={list.content}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

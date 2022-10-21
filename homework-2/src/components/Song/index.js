import "./style.css";

function Song(props) {
  return (
    <div className="song">
      <div className="song__img">
        <img src={props.song__img} alt="" />
      </div>

      <div className="song__info">
        <h4 className="info__name">{props.info__name}</h4>
        <p className="info__singer">{props.info__singer}</p>
        <p className="info__time">{props.info__time}</p>
      </div>
    </div>
  );
}

export default Song;

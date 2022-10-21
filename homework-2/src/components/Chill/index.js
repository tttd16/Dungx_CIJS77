import "./style.css";

function Chill(props) {
  return (
    <div className="chill">
      <div className="chill__img">
        <img src={props.chill__img} alt="" />
      </div>

      <div className="chill__info">
        <h4 className="chill__title">{props.chill__title}</h4>
        <p className="chill__content">{props.chill__content}</p>
      </div>
    </div>
  );
}

export default Chill;

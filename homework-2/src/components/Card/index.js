import "./style.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  const [clickbtn, setclickBtn] = useState(true);
  const pressBtn = () => {
    setclickBtn(!clickbtn);
  };
  return (
    <div>
      <div className="card">
        <h2>Mới Phát Hành</h2>
        <div className="btn">
          <div className="btn__sa">
            <button onClick={pressBtn}>{props.song}</button>
            <button onClick={pressBtn}>{props.album}</button>
          </div>
          <div className="btn__all">
            TẤT CẢ
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "./App.css";
import data from "./data.json";
import TimerOffIcon from "@material-ui/icons/TimerOff";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import AttachmentIcon from "@material-ui/icons/Attachment";
function App() {
  return (
    <div className="app">
      <div className="container">
        {data.map((u) => (
          <div className="card" key={u.title}>
            <div className="image-dive">
              <img src={u.img} alt="image" style={{ width: "100%" }} />
              {u.timeStamps === "" && (
                <div className="side">
                  <div>
                    <h2>{u.workOutNum}</h2>
                    <p>Work out</p>
                    <MenuOpenIcon />
                  </div>
                </div>
              )}
            </div>
            <div className="card__content">
              <h5 className="card__title">{u.title}</h5>
              <img src={u.logo} className="card__logo" alt="logo" />
            </div>

            {u.timeStamps !== "" && (
              <p className="p">
                <span>
                  {" "}
                  <TimerOffIcon className="icon" />
                  {u.timeStamps}
                </span>
                <span>
                  <AttachmentIcon className="icon icon-2" />
                  {u.views}
                </span>
              </p>
            )}
            {u.ViewDetail !== "" && <button>{u.ViewDetail}</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

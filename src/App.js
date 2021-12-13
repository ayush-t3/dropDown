import "./styles.css";
import React, { useEffect } from "react";
// import data from "./data/task.json";
// import list from "./data/list.js";

export default function App() {
  function listScript() {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", () => {
        document.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }
  useEffect(() => {
    listScript();
  });

  return (
    <div className="App">
      <ul id="myUL">
        <li>
          <span className="caret">India</span>
          <ul className="nested">
            <li>
              <span className="caret">
                <input type="checkbox" />
                <label>Madhya Pradesh</label>
              </span>
              <ul className="nested">
                <li>Bhopal</li>
                <li>Bhopal</li>
              </ul>
            </li>
            <li>
              <span className="caret">
                <input type="checkbox" />
                <label>Karnataka</label>
              </span>
              <ul className="nested">
                <li>Bangalore</li>
                <li>Bagalkot</li>
              </ul>
            </li>
            <li>
              <span className="caret">
                <input type="checkbox" />
                <label>Maharashtra</label>
              </span>
              <ul className="nested">
                <li>Mumbai</li>
                <li>Pune</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

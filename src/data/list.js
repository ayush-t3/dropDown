import React from "react";

export default function activeList() {
  return (
    <div>
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

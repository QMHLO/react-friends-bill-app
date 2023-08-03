import React from "react";
import Button from "./Button";

function FormSplit() {
  return (
    <div className="form-split">
      <div className="form-split-block">
        <form action="">
          <h2>SPLIT A BILL WITH X</h2>
          <div className="row">
            <label htmlFor="">Bill Value</label>
            <input type="text" />
          </div>
          <div className="row">
            <label htmlFor="">Your Expense</label>
            <input type="text" />
          </div>
          <div className="row">
            <label htmlFor="">X's expense</label>
            <input type="text" disabled />
          </div>
          <div className="row">
            <label htmlFor="">Who is paying the bill</label>
            <select>
              <option value="user">You</option>
              <option value="friend">X</option>
            </select>
          </div>
          <Button>Split Bill</Button>
        </form>
      </div>
    </div>
  );
}

export default FormSplit;

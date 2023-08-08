import React, { useState } from "react";
import Button from "./Button";

function FormSplit({ selectedFriend }) {
  const name = selectedFriend.name;
  const upperCaseName = name.toUpperCase();
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <div className="form-split">
      <div className="form-split-block">
        <form action="">
          <h2>SPLIT A BILL WITH {upperCaseName}</h2>
          <div className="row">
            <label htmlFor="">Bill Value</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
          </div>
          <div className="row">
            <label htmlFor="">Your Expense</label>
            <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />
          </div>
          <div className="row">
            <label htmlFor="">{name}'s expense</label>
            <input type="text" disabled value={paidByFriend} />
          </div>
          <div className="row">
            <label htmlFor="">Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
              <option value="user">You</option>
              <option value="friend">{name}</option>
            </select>
          </div>
          <Button>Split Bill</Button>
        </form>
      </div>
    </div>
  );
}

export default FormSplit;

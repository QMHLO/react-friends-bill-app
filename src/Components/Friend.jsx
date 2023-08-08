import React from "react";
import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <>
      <li className="friend-card">
        <div className={isSelected ? "friend-card-wrapper-selected" : "friend-card-wrapper"}>
          <img src={friend.image} alt={friend.name} />
          <div className="friend-card-desc">
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
              <p className="red">
                You owe&nbsp;{friend.name} {Math.abs(friend.balance)}$
              </p>
            )}
            {friend.balance > 0 && (
              <p className="green">
                You owe&nbsp;{friend.name} {Math.abs(friend.balance)}$
              </p>
            )}
            {friend.balance === 0 && <p>You and&nbsp;{friend.name} are even</p>}
          </div>
          <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
        </div>
      </li>
    </>
  );
}

export default Friend;

import React from "react";
import Friend from "./Friend";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <div>
      <ul className="friends-list">
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;

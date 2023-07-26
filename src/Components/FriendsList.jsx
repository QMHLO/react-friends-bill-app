import React from "react";
import Friend from "./Friend";
const initialFriends = [
  {
    id: 1,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=1",
    balance: -7,
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=4",
    balance: 20,
  },
  {
    id: 3,
    name: "Jenny",
    image: "https://i.pravatar.cc/48?u=10",
    balance: 0,
  },
];
function FriendsList({ friend }) {
  const friends = initialFriends;
  return (
    <div>
      <ul className="friends-list">
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;

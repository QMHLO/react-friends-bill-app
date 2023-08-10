import React from "react";
import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import Button from "./Components/Button";
import FormSplit from "./Components/FormSplit";
import { useState } from "react";

function App() {
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

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) => friends.map((friend) => (friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend)));
    setSelectedFriend(null);
  }
  return (
    <div>
      <div className="main">
        <div className="sidebar">
          <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
        </div>
        {selectedFriend && <FormSplit selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import Button from "./Components/Button";
import FormSplit from "./Components/FormSplit";
import { useState } from "react";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="main">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      <FormSplit />
    </div>
  );
}

export default App;

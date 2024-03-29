import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <div className="add-friend">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="">Friend Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="row">
          <label htmlFor="">Image Url</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default FormAddFriend;

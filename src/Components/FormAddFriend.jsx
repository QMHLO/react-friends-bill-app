import Button from "./Button";

function FormAddFriend() {
  return (
    <div className="add-friend">
      <form action="">
        <div className="row">
          <label htmlFor="">Friend Name</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="">Image Url</label>
          <input type="text" />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default FormAddFriend;

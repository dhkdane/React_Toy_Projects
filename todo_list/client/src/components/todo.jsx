import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();

  // Object to store memo
  const [memo, setMemo] = useState({ title: "", msg: "" });

  function onClickCancel() {
    navigate("/");
  }

  async function onClickAdd() {
    // Create a new memo object
    const newMemo = {
      title: memo.title,
      msg: memo.msg,
    };

    // Send the database a memo to store.
    await postData(newMemo);

    // Clear input fields
    setMemo({ title: "", msg: "" });
  }

  // This HTTP request function only executes when the user submits the memo
  const postData = async (newMemo) => {
    try {
      const response = await axios.post("http://localhost:5173/memo", newMemo); // Assuming newMemo contains the memo data
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="task-container">
        <label>Task</label>
        <br />
        <input
          type="text"
          value={memo.title}
          onChange={(e) => setMemo({ ...memo, title: e.target.value })}
        />
      </div>
      <div className="memo-container">
        <label>Memo</label>
        <br />
        <input
          type="text"
          value={memo.msg}
          onChange={(e) => setMemo({ ...memo, msg: e.target.value })}
        />
      </div>
      <div className="btn-container">
        <button onClick={onClickAdd}>Add</button>
        <button onClick={onClickCancel}>Cancel</button>
      </div>
    </div>
  );
}

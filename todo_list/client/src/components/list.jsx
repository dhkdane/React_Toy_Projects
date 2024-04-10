import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();
  async function getData() {
    try {
      fetch("https://localhost:5000", {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "your-api-key",
          "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  return (
    <div>
      <div className="flex justify-center">
        <h2>List of Memos</h2>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-indigo-400 rounded-full border-green-200 size-20 hover:rotate-45"
          onClick={() => navigate("/todo")}
        >
          +
        </button>
      </div>
    </div>
  );
}

/**  <ul>
Map over the list of memos and display them 
memos.map((memo, index) => (
  <li key={index}>
    <p>Title: {memo.title}</p>
    <p>Todo: {memo.msg}</p>
    <button>Edit</button>
    <button>Delete</button>
  </li>
))}
</ul> */

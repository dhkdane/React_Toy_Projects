import List from "./list";
import Todo from "./todo";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function TodoList() {
  // Callback function to receive memo data from Memo component

  return (
    <div className=" bg-red-200">
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<List />} />
            {/* Pass the receiveMemo callback funcion as a prop */}
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

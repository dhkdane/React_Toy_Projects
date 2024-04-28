import Todo from "./components/todo";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

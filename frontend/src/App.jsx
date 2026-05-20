import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/form";
import Prep from "./pages/prep";
import Question from "./pages/question";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/prep" element={<Prep />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
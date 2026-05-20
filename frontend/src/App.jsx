import { Routes, Route } from "react-router-dom";

import Form from "./pages/form";
import Prep from "./pages/prep";
import Question from "./pages/question";
import Answer from "./pages/answer";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Form />} />

      <Route path="/prep" element={<Prep />} />

      <Route path="/question" element={<Question />} />

      <Route path="/answer" element={<Answer />} />

    </Routes>

  );
}

export default App;
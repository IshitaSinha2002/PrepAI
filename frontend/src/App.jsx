import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/form";
import Prep from "./pages/prep";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/prep" element={<Prep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Checkboxes from "./pages/Checkboxes";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/checkboxes" element={<Checkboxes />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

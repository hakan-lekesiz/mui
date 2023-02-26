
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Checkboxes from "./pages/Checkboxes";
import ContinuousSlider from "./pages/ContinuousSlider";
import Home from "./pages/Home";
import Inputs from "./pages/Inputs";
import Layout from "./pages/Layout";
import RadioButtons from "./pages/RadioButtons";
import Selects from "./pages/Selects";
import Tooltips from "./pages/Tooltips";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/checkboxes" element={<Checkboxes />} />
          <Route path="/selects" element={<Selects />} />
          <Route path="/radioButtons" element={<RadioButtons />} />
          <Route path="/continuousSlider" element={<ContinuousSlider />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/tooltips" element={<Tooltips />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

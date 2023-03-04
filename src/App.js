
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Checkboxes from "./pages/Checkboxes";
import ContinuousSlider from "./pages/ContinuousSlider";
import Dialogs from "./pages/Dialogs";
import Home from "./pages/Home";
import Inputs from "./pages/Inputs";
import Layout from "./pages/Layout";
import RadioButtons from "./pages/RadioButtons";
import Selects from "./pages/Selects";
import Tooltips from "./pages/Tooltips";
import Misc from "./pages/Misc";
import Accordions from "./pages/Accordions";
import Drawers from "./pages/Drawers";
import Paginations from "./pages/Paginations";
import Steppers from "./pages/Steppers";

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
          <Route path="/modals" element={<Dialogs />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/accordions" element={<Accordions />} />
          <Route path="/drawers" element={<Drawers />} />
          <Route path="/paginations" element={<Paginations />} />
          <Route path="/steppers" element={<Steppers />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

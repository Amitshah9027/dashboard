import { Bodys } from "./App.styled.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { useState } from "react";
import AboutUs from "./pages/AboutUs.jsx";
import { FetchDataContext } from "./component/context/dataContext";
import Dashboards from "./pages/Dashboards";

function App() {
  const [formValues, setFormValues] = useState(null);

  return (
    <Bodys>
      <FetchDataContext.Provider value={[formValues, setFormValues]}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/dashboard" element={<Dashboards />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Router>
      </FetchDataContext.Provider>
    </Bodys>
  );
}

export default App;

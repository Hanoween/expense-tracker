import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

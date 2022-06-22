import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login/>} />
        <Route path="/auth/new" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;

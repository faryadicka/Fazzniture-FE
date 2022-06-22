import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/new" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

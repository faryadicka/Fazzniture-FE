import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//Redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store"

// Pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;

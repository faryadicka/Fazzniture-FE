import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Redux
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// Pages
import Home from './pages/Home';
import Auth from './pages/Auth';
import Products from './pages/Products';
// import Profile from "./pages/Profile";
import Info from './pages/Info';
import Chat from './pages/Chat';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Wislist from './pages/Wishlist'
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

function App() {
   return (
      <ReduxProvider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/auth" element={<Auth />} />
                  {/* <Route path="/profile" element={<Profile />} /> */}
                  <Route path="/profile" element={<Info />} />
                  <Route path="/myproduct" element={<Info />} />
                  <Route path="/sellingproduct" element={<Info />} />
                  <Route path="/myorder" element={<Info />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/products/detail/:id" element={<ProductDetail />} />
                  <Route path="/wishlist" element={<Wislist/>} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Router>
         </PersistGate>
      </ReduxProvider>
   );
}

export default App;

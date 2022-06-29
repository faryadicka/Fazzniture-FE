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
import Wishlist from './pages/Wishlist';
import Notification from './pages/Notification';
import Blog from './pages/Blog';
import OrderTracking from './pages/OrderTracking';
import Reset from './pages/Reset/index.jsx';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={
              <PrivateRoute redirectTo="/auth" extraData={{ isAuthenticated: false }}>
                <Cart />
              </PrivateRoute>
            } />
            <Route path="/auth" element={
              <PublicRoute redirectTo="/">
                <Auth />
              </PublicRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute redirectTo="/auth" extraData={{ isAuthenticated: false }}>
                <Info />
              </PrivateRoute>
            } />
            <Route path="/myproduct" element={
              <PrivateRoute redirectTo="/auth" extraData={{ isAuthenticated: false }}>
                <Info />
              </PrivateRoute>
            } />
            <Route path="/sellingproduct" element={
              <PrivateRoute redirectTo="/auth" extraData={{ isAuthenticated: false }}>
                <Info />
              </PrivateRoute>
            } />
            <Route path="/myorder" element={
              <PrivateRoute redirectTo="/auth" extraData={{ isAuthenticated: false }}>
                <Info />
              </PrivateRoute>
            } />
            <Route path="/products" element={<Products />} />
            <Route path="/chat" element={
              <PrivateRoute redirectTo="/auth" extraData={{ isAuthenticated: false }}>
                <Chat />
              </PrivateRoute>
            } />
            <Route path="/products/detail/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/reset-password/:token" element={<Reset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );

}

export default App;

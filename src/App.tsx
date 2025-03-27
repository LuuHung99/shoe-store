import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "sonner";
import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/blog";
import Cart from "./components/cart";
import Contact from "./components/contact";
import Product from "./components/product";
import Products from "./components/products";
import Wishlist from "./components/wishlist";
import Account from "./components/account";
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";
import routes from "tempo-routes";
import { getToken } from "./services/authService";
import PublicRoute from "./components/PublicRoute";

function App() {
  const token = getToken();

  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        }
      >
        <>
          <Routes>
            {/* Login Route with redirect if already authenticated */}
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
            </Route>
          </Routes>
          <Toaster position="top-center" richColors />
        </>
      </Suspense>
    </Provider>
  );
}

export default App;

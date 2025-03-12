import { Routes, Route } from "react-router";
import CatalogComponent from "./components/catalog/CatalogComponent";
import Footer from "./components/core/footer/Footer";
import Header from "./components/core/header/Header";
import HomeComponent from "./components/home/HomeComponent";
import NotFoundComponent from "./components/not-found/NotFoundComponent";
import LoginComponent from "./components/auth/login/LoginComponent";
import RegisterComponent from "./components/auth/register/RegisterComponent";
import CartComponent from "./components/cart/CartComponent";
import ProductDetailsComponent from "./components/product-details/ProductDetailsComponent";
import ProductCreate from "./components/product-create/ProductCreate";

function App() {

    return (
        <>
            <div className="content d-flex f-direction-column gap-20">
                <Header />

                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/catalog/:subcategoryId/subcategory" element={<CatalogComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/register" element={<RegisterComponent />} />
                    <Route path="/my-cart" element={<CartComponent />} />
                    <Route path="/products/:productId/details" element={<ProductDetailsComponent />} />
                    <Route path="/products/create" element={<ProductCreate />} />
                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>

                <Footer />
            </div>
        </>
    )
}

export default App
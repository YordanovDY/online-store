import { Routes, Route } from "react-router";
import CatalogComponent from "./components/catalog/CatalogComponent";
import Footer from "./components/core/footer/Footer";
import Header from "./components/core/header/Header";
import HomeComponent from "./components/home/HomeComponent";
import NotFoundComponent from "./components/not-found/NotFoundComponent";
import LoginComponent from "./components/auth/login/LoginComponent";
import RegisterComponent from "./components/auth/register/RegisterComponent";
import CartComponent from "./components/cart/CartComponent";
import ProductDetailsComponent from "./components/product/product-details/ProductDetailsComponent";
import ProductCreate from "./components/product/product-create/ProductCreate";
import ProductUpdate from "./components/product/product-update/ProductUpdate";
import { UserProvider } from "./components/providers/UserProvider";

function App() {

    return (
        <UserProvider>
            <div className="content d-flex f-direction-column gap-20">
                <>
                    <Header />

                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="/catalog/:subcategoryId/subcategory" element={<CatalogComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/register" element={<RegisterComponent />} />
                        <Route path="/my-cart" element={<CartComponent />} />
                        <Route path="/products/:productId/details" element={<ProductDetailsComponent />} />
                        <Route path="/products/create/:subcategoryId" element={<ProductCreate />} />
                        <Route path="/products/:productId/edit" element={<ProductUpdate />} />
                        <Route path="*" element={<NotFoundComponent />} />
                    </Routes>

                    <Footer />
                </>

            </div>

        </UserProvider>
    )
}

export default App
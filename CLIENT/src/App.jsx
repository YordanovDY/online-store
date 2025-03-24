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
import SuccessfulRegister from "./components/successful-register/SuccessfulRegister";
import OrderComponent from "./components/order/OrderComponent";
import ContactDetailsForm from "./components/contact-details/ContactDetailsForm";
import Profile from "./components/profile/Profile";
import MyOrdersList from "./components/my-orders-list/MyOrdersList";

function App() {

    return (
        <UserProvider>
            <div className="content d-flex f-direction-column gap-20">
                <>
                    <Header />

                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="/catalog/:subcategoryId/subcategory" element={<CatalogComponent />} />

                        <Route path="/auth">
                            <Route path="login" element={<LoginComponent />} />
                            <Route path="register" element={<RegisterComponent />} />
                            <Route path="register-confirmation/:email" element={<SuccessfulRegister />} />
                        </Route>

                        <Route path="/profile">
                            <Route index element={<Profile />} />
                            <Route path="my-cart" element={<CartComponent />} />
                            <Route path="add-contact-info" element={<ContactDetailsForm />} />
                            <Route path="my-orders" element={<MyOrdersList />} />
                        </Route>

                        <Route path="/products">
                            <Route path=":productId/details" element={<ProductDetailsComponent />} />
                            <Route path="create/:subcategoryId" element={<ProductCreate />} />
                            <Route path=":productId/edit" element={<ProductUpdate />} />
                        </Route>

                        <Route path="/orders">
                            <Route path="place-order" element={<OrderComponent />} />
                        </Route>

                        <Route path="*" element={<NotFoundComponent />} />
                    </Routes>

                    <Footer />
                </>

            </div>

        </UserProvider>
    )
}

export default App
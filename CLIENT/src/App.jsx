import { lazy, Suspense } from "react";
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
import { UserProvider } from "./components/providers/UserProvider";
import SuccessfulRegister from "./components/successful-register/SuccessfulRegister";
import OrderComponent from "./components/order/OrderComponent";
import ContactDetailsForm from "./components/contact-details/ContactDetailsForm";
import Profile from "./components/profile/Profile";
import MyOrdersList from "./components/my-orders-list/MyOrdersList";
import OrderDetails from "./components/order-details/OrderDetails";
import CatalogSearch from "./components/catalog-search/CatalogSearch";
import LoadingSpinner from "./components/shared/loading-spinner/LoadingSpinner";
import AuthGuard from "./components/guards/AuthGuard";
import NoPermissions from "./components/no-permissions/NoPermissions";
import CustomerGuard from "./components/guards/CustomerGuard";

const Dashboard = lazy(() => import('./components/employee/dashboard/Dashboard'));
const ProfileCreate = lazy(() => import('./components/employee/dash-profile-create/ProfileCreate'));
const DashProductCreate = lazy(() => import('./components/employee/dash-product-create/DashProductCreate'));
const MyProducts = lazy(() => import('./components/employee/dash-my-products/MyProducts'));
const ProductCreate = lazy(() => import('./components/product/product-create/ProductCreate'));
const ProductUpdate = lazy(() => import('./components/product/product-update/ProductUpdate'));

function App() {

    return (
        <UserProvider>
            <div className="content d-flex f-direction-column gap-20">
                <>
                    <Header />

                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="/catalog">
                            <Route path=":subcategoryId/subcategory" element={<CatalogComponent />} />
                            <Route path="search" element={<CatalogSearch />} />
                        </Route>


                        {/* // TODO: Only for guests */}
                        <Route path="/auth">
                            <Route path="login" element={<LoginComponent />} />
                            <Route path="register" element={<RegisterComponent />} />
                            <Route path="register-confirmation/:email" element={<SuccessfulRegister />} />
                        </Route>


                        <Route path="/profile" element={<AuthGuard />}>
                            <Route index element={<Profile />} />
                            <Route path="add-contact-info" element={<ContactDetailsForm />} />

                            <Route path="my-cart" element={<CustomerGuard />}>
                                <Route index element={<CartComponent />} />
                            </Route>

                            <Route path="my-orders" element={<CustomerGuard />}>
                                <Route index element={<MyOrdersList />} />
                            </Route>
                        </Route>

                        <Route path="/products">
                            <Route path=":productId/details" element={<ProductDetailsComponent />} />


                            {/* // TODO: Only for store managers + admins */}
                            <Route path="create/:subcategoryId" element={(
                                <Suspense fallback={<LoadingSpinner />}>
                                    <ProductCreate />
                                </Suspense>
                            )} />


                            {/* // TODO: Only for store managers + admins */}
                            <Route path=":productId/edit" element={(
                                <Suspense fallback={<LoadingSpinner />}>
                                    <ProductUpdate />
                                </Suspense>
                            )} />
                        </Route>

                        <Route path="/orders">
                            {/* // TODO: Only for customers */}
                            <Route path="place-order" element={<OrderComponent />} />

                            <Route path=":orderId/details" element={<OrderDetails />} />
                        </Route>


                        {/* // TODO: Only for employees */}
                        <Route path="/dashboard">
                            <Route index element={(
                                <Suspense fallback={<LoadingSpinner />}>
                                    <Dashboard />
                                </Suspense>
                            )} />


                            {/* // TODO: Only for admins */}
                            <Route path="create-profile" element={(
                                <Suspense fallback={<LoadingSpinner />}>
                                    <ProfileCreate />
                                </Suspense>
                            )} />


                            {/* // TODO: Only for store managers + admins */}
                            <Route path="create-product" element={(
                                <Suspense fallback={<LoadingSpinner />}>
                                    <DashProductCreate />
                                </Suspense>
                            )} />

                            {/* // TODO: Only for store managers + admins */}
                            <Route path="product-managment" element={(
                                <Suspense fallback={<LoadingSpinner />}>
                                    <MyProducts />
                                </Suspense>
                            )} />
                        </Route>

                        <Route path="/no-permissions" element={<NoPermissions />} />
                        <Route path="*" element={<NotFoundComponent />} />
                    </Routes>

                    <Footer />
                </>

            </div>

        </UserProvider>
    )
}

export default App
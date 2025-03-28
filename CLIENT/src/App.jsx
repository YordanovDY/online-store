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
import GuestGuard from "./components/guards/GuestGuard";
import EmployeeGuard from "./components/guards/EmployeeGuard";
import ManagerGuard from "./components/guards/ManagerGuard";
import AdminGuard from "./components/guards/AdminGuard";

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



                        <Route path="/auth" element={<GuestGuard />}>
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


                            <Route element={<AuthGuard />}>
                                <Route path="create/:subcategoryId" element={<ManagerGuard />}>
                                    <Route index element={(
                                        <Suspense fallback={<LoadingSpinner />}>
                                            <ProductCreate />
                                        </Suspense>
                                    )} />
                                </Route>


                                {/* //TODO: Only owner + admins */}
                                <Route path=":productId/edit" element={<ManagerGuard />}>
                                    <Route index element={(
                                        <Suspense fallback={<LoadingSpinner />}>
                                            <ProductUpdate />
                                        </Suspense>
                                    )} />
                                </Route>


                            </Route>

                        </Route>

                        <Route path="/orders">
                            <Route path="place-order" element={<OrderComponent />} />
                            <Route path=":orderId/details" element={<OrderDetails />} />
                        </Route>


                        <Route element={<AuthGuard />}>
                            <Route path="/dashboard" element={<EmployeeGuard />}>
                                <Route index element={(
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Dashboard />
                                    </Suspense>
                                )} />


                                <Route path="create-profile" element={<AdminGuard />}>
                                <Route index element={(
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <ProfileCreate />
                                    </Suspense>
                                )} />
                                </Route>

                                <Route path="create-product" element={<ManagerGuard />}>
                                    <Route index element={(
                                        <Suspense fallback={<LoadingSpinner />}>
                                            <DashProductCreate />
                                        </Suspense>
                                    )} />
                                </Route>


                                <Route path="product-managment" element={<ManagerGuard />}>
                                    <Route index element={(
                                        <Suspense fallback={<LoadingSpinner />}>
                                            <MyProducts />
                                        </Suspense>
                                    )} />
                                </Route>

                            </Route>
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
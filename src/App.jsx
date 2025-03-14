import { useEffect, useState } from "react";
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
import { UserContext } from "./contexts/UserContext";
import LoadingSpinner from "./components/shared/loading-spinner/LoadingSpinner";
import useFetch from "./hooks/useFetch";

function App() {

    const [requireRender, setRequireRender] = useState(true);
    const [pending, user, error] = useFetch('/auth/user', null);

    // TODO: Get user data on each re-render;

    useEffect(() => {
        if(pending){
            return;
        }
        
        setRequireRender(false);
    }, [pending])

    const onSuccessLogin = () => {
        setRequireRender(true);
    }

    return (
        <UserContext.Provider value={{ user, onSuccessLogin }}>
            <div className="content d-flex f-direction-column gap-20">
                {pending

                    ? <LoadingSpinner />
                    :
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
                            <Route path="*" element={<NotFoundComponent />} />
                        </Routes>

                        <Footer />
                    </>

                }
            </div>

        </UserContext.Provider>
    )
}

export default App
import CatalogComponent from "./components/catalog/CatalogComponent";
import Footer from "./components/core/footer/Footer";
import Header from "./components/core/header/Header";
import HomeComponent from "./components/home/HomeComponent";

function App() {

    return (
        <>
            <div className="content d-flex f-direction-column gap-20">
                <Header />
                {/* <HomeComponent /> */}
                <CatalogComponent />
                <Footer />
            </div>
        </>
    )
}

export default App
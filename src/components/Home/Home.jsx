import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "../Footer/Footer";
import Sponsor from "./Sponsor";

const Home = () => {

    const loadedBrands = useLoaderData();
    console.log(loadedBrands);

    return (
        <div>
            <Navbar></Navbar>     
            <Banner></Banner>
            <div className="mt-20 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center">Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    loadedBrands.map(brand => <Brands key={brand._id} brand={brand}></Brands>)
                }
                </div>
            </div>
            <Sponsor></Sponsor>
            <Footer></Footer>
        </div>
    );
};

export default Home;
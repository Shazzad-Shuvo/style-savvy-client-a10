import { useLoaderData } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
    const loadedData = useLoaderData();
    const { _id, name, brand, type, price, description, rating, photo } = loadedData;

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-5 md:mx-auto mt-24 card bg-base-100 shadow-xl">
                <figure><img className="w-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions mt-5">
                        <h4 className="font-semibold">Price:</h4>
                        <p className="flex items-center"><BsCurrencyDollar></BsCurrencyDollar><span className="text-pink-900 font-semibold">{price}</span></p>
                        <button className="btn bg-emerald-400 hover:bg-emerald-500"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NoProduct from "../NoProduct/NoProduct";

const BrandProducts = () => {

    const { name } = useParams();
    const loadedProducts = useLoaderData();
    console.log(name, loadedProducts);
    const products = loadedProducts.filter(product => product.brand === name);
    console.log(products);

    return (
        <div>
            <Navbar></Navbar>
            {
                products.length> 0 ?
                <div className="max-w-6xl mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    {
                        products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        
                    }
                </div> :
                <div>
                    <NoProduct></NoProduct>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;
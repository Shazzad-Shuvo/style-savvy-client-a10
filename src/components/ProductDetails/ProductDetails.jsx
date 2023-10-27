import { useLoaderData } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
    const loadedData = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const { _id, name, price, description, rating, photo } = loadedData;
    const email = user.email;
    console.log(email);

    const handleAddToCart = (event) =>{
        event.preventDefault();
        const newCartProduct = {name, price, email};
        // console.log(newCartProduct);

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to cart',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleAddToCart}>
                <div className="max-w-3xl mx-5 md:mx-auto mt-24 card bg-base-100 shadow-xl">
                    <figure><img className="w-full" src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className="card-actions mt-5">
                            <h4 className="font-semibold">Rating: {rating} (out of 5)</h4>
                        </div>
                        <div className="card-actions">
                            <h4 className="font-semibold">Price:</h4>
                            <p className="flex items-center mb-3"><BsCurrencyDollar></BsCurrencyDollar><span className="text-pink-900 font-semibold">{price}</span></p>
                            
                            <input type="submit" value="Add to Cart" className="btn btn-primary btn-block" />
                        </div>
                    </div>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
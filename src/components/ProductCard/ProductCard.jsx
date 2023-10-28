import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const { _id, name, brand, type, price, description, rating, photo } = product;

    return (
        <div className="card card-side bg-base-100 shadow-lg rounded-lg">
            <figure><img className="w-72 h-72" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Price: {price} $</p>
                <p>Rating: {rating} (out of 5)</p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${_id}`}>
                        <button className="btn  bg-amber-400">Details</button>
                    </Link>
                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn  bg-emerald-400">Update</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;

const ProductCard = ({product}) => {

    const {name, brand, type, price, description, rating, photo} = product;

    return (
        <div className="card card-side bg-base-100 shadow-lg rounded-lg">
            <figure><img className="w-72 h-72" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Price: {price} $</p>
                <p>Rating: {rating} (out of 5)</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
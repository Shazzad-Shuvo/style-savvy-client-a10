import { Link } from "react-router-dom";


const Brands = ({ brand }) => {
    const { name, image } = brand;
    return (
        <Link to={`/brandProducts/${name}`}>
                <div className="card h-96 bg-base-100 image-full mx-5">
                    <img className="w-80 mx-auto mt-5 px-5" src={image} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
        </Link>
    );
};

export default Brands;
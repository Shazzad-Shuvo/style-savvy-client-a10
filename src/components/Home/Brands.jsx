

const Brands = ({brand}) => {
    const {name, image} = brand;
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <img className="" src={image} alt="" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default Brands;
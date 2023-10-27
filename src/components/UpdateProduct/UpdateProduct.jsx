import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, brand, type, price, description, rating, photo } = product;

    const handleUpdateProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand, type, price, description, rating, photo };
        console.log(updatedProduct);

        // send data to the server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-6 md:p-24">
                <h2 className="text-4xl font-extrabold">Update Product</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* product name & brand name */}
                    <div className="md:flex mb-6 mt-6 gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered rounded-lg w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select className="input input-bordered w-full" name="brand" defaultValue={brand} required>
                                    <option value="Nike">Nike</option>
                                    <option value="Adidas">Adidas</option>
                                    <option value="Gucci">Gucci</option>
                                    <option value="Zara">Zara</option>
                                    <option value="H&M">H&M</option>
                                    <option value="Louis Vuitton">Louis Vuitton</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* product type & price */}
                    <div className="md:flex mb-6 gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* short description & rating */}
                    <div className="md:flex mb-6 gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                {/* <input type="text" name="rating" placeholder="Rating (Out of 5)" className="input input-bordered w-full" /> */}
                                <select className="input input-bordered w-full" name="rating" defaultValue={rating} required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5" selected>5</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* form photo url row */}
                    <div className="mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Product Photo URL" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-primary btn-block" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProduct;
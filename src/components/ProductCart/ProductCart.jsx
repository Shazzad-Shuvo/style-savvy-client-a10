import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductCart = () => {
    const loadedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(loadedCartProducts);
    console.log(cartProducts);

    const handleDeleteProduct = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted.',
                                'success'
                            )

                            // remove the user from UI
                            const remainingProducts = cartProducts.filter(prod => prod._id !== _id);
                            setCartProducts(remainingProducts);
                        }
                    })
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-20">
                <h2>Products in Cart: {cartProducts.length}</h2>
                <div className=" max-w-4xl mx-auto overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-400">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProducts.map(product =>
                                    <tr key={product._id} className="hover">
                                        <th></th>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <button onClick={() => handleDeleteProduct(product._id)} className="btn"><FaTrashCan></FaTrashCan></button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductCart;
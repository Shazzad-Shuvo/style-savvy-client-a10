import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";

const ProductCart = () => {
    const loadedCartProducts = useLoaderData();
    const {user} = useContext(AuthContext);
    // console.log(user.email);

    const userCartProduct = loadedCartProducts.filter(userCart => user.email === userCart.email);
    // console.log(userCartProduct);

    const [cartProducts, setCartProducts] = useState(userCartProduct);
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
                fetch(`https://style-savvy-server.vercel.app/cart/${_id}`, {
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
                <h2 className="text-5xl font-bold text-center mb-10">MyCart</h2>
                <div className=" max-w-4xl mx-5 lg:mx-auto overflow-x-auto">
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
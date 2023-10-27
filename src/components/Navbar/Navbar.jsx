import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out successfully');
            })
            .catch(error => {
                console.error(error);
            })
    };

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/cart'>My Cart</NavLink></li>

    </>

    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar backdrop-blur-3xl caret-yellow-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-16 lg:w-32" src="https://i.ibb.co/CWggTtv/cropped-1.png" alt="" />
                    <a className="normal-case md:text-2xl font-bold">Style Savvy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex flex-col md:flex-row items-center">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                                        <div className="w-8 md:w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <p className="text-sm md:text-base mr-4">{user.displayName}</p>
                                </div>
                                <button onClick={handleLogOut} className="btn bg-emerald-400 hover:bg-emerald-500">Log Out</button>
                            </> :
                            <Link to='/login'>
                                <button className="btn bg-emerald-400">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
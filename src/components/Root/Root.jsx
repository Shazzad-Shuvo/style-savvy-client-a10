import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div style={{ backgroundImage: 'url()', backgroundSize:'cover' }}>
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;
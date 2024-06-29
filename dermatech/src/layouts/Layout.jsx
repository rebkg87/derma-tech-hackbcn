import { Outlet } from "react-router-dom";
import Navbar from "../components/general/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
            {/* <Footer> */}
        </div>
    );
};

export default Layout;
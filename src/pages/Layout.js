import { Link, Outlet } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";

const Layout = () => {

    return (
        <div style={{ display: "flex" }}>
            <AsideMenu />
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>

        </div>
    )
};

export default Layout;
import { Link, Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div style={{ display: "flex" }}>
            <aside style={{
                background: "#c1c1c1",
                padding: "0 40px 10px 0",
                minHeight:"100vh"
            }}>
                <ul style={{
                    listStyle: "none",
                    padding: "10px"
                }}>
                    <li>
                        <Link to="/buttons">
                            Buttons
                        </Link>
                    </li>
                    <li>
                        <Link to="/checkboxes">
                            Checkboxes
                        </Link>
                    </li>
                </ul>
            </aside>
            <main style={{padding:"20px"}}>
                <Outlet />
            </main>

        </div>
    )
};

export default Layout;
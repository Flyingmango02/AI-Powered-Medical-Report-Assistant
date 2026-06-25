import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import "./Layout.css";

export function Layout() {
    return(
        <div className="layout-container">
            <NavBar />
            {/* display children using outlet */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}
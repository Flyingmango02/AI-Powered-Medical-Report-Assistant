import { Outlet } from "react-router-dom";

export function Layout() {
    return(
        <div>
            <nav>Navbar</nav>
            {/* add side bar later on */}

            {/* display children using outlet */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}
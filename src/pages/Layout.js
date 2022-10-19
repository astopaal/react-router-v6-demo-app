import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Outlet/>
            <nav>
                <ul>
                    <li><NavLink style={() => ({color : "red"})} to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>


                </ul>
            </nav>
        </div>
    )
}

export default Layout;
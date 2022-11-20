
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

function NavBar () {


    return ( 

            <>
            <div className="nav_container">
                <div className="logo_logo_container topnav">
                    <div className="logo_container">
                        <Logo />
                    </div>
                </div>
                <div className="searchBar_container topnav">
                    <input className="searchInput"/>
                </div>
                <div className="account_container topnav">
                    {/* <button className="profile acc_but">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi_bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    </button> */}
                    <Link to={"/cart"}>
                        <button className="cart acc_but">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi_bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="nav_lower_container">
                    <NavLink to={'/'} className="nav_lower_but " > Inicio </NavLink>
                    <NavLink to={'/catalog'} className="nav_lower_but " > Catalogo </NavLink>
                    <NavLink to={'/contact'} className="nav_lower_but " > Contacto </NavLink>
                </div>
                
            </div>
            </>
    )
}


export default NavBar;
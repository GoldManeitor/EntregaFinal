import { Link } from "react-router-dom";

function Inicio() {
    return (
        <div className="inicio_container">
        <div className="ver_catalogo_container">
            <h1 className="tituloInicio">¡Bienvenido al simulador de tienda de comics!</h1>
            <Link to={`/catalog`}>
            <button className="ver_catalogo">Ver catálogo</button>
            </Link>
        </div>
        <div>
            <img className="fondo" src="https://res.cloudinary.com/dog9hy3gc/image/upload/v1668902315/comic-page-react-coderhouse/fondoIncio_jahoqw.jpg"></img>
        </div>
        </div>
    )
}

export default Inicio;
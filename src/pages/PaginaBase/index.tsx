import { Outlet } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import Container from "../../components/Container";
import FavoritosProvider from "../../context/Favoritos";
import Pie from "../../components/Pie/Pie";

const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase;
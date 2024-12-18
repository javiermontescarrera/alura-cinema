import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Favoritos.module.css";

const Favoritos = () => {

    const {favorito} = useFavoritosContext();

    return (
        <div className={styles.favoritos}>
            <Banner img="favoritos" color="#154580" />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    favorito.map((fav: {
                        id: number;
                        titulo: string;
                        capa: string;
                    }) => {
                            return <Card {...fav} />
                        }
                    )
                }
            </section>
        </div>
    )
};

export default Favoritos;
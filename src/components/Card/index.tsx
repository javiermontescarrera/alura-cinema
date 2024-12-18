import { Link } from "react-router-dom";
import { useFavoritosContext, videoType } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png"
import iconNoFavorito from "./iconNoFavorito.png"

const Card = ({id, capa, titulo, link}:{id: number; capa: string; titulo: string; link: string}) => {
    const {favorito, agregarFavorito} = useFavoritosContext();
    const isFavorito = favorito.some((item: videoType) => item.id === id);
    const icon = isFavorito ? iconFavorito : iconNoFavorito;

    return(
        <div key={id} className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}/>
                <h2>{titulo}</h2>
            </Link>
            <img 
                src={icon} 
                alt="Icono Favorito" 
                className={styles.favorito}
                onClick={() => agregarFavorito({id, capa, titulo, link})}
            />
        </div>
    );
}

export default Card;
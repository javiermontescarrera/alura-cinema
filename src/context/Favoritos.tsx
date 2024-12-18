import { createContext, FC, useState, useContext } from "react";

interface FavoritosContextType {
    favorito: [];
    setFavorito: (favorito: []) => void;
  }

const FavoritosContext = createContext<FavoritosContextType>({ favorito: [], setFavorito: () => {} });

FavoritosContext.displayName = "Favoritos";

const FavoritosProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
};

const useFavoritosContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito: object) {
        const favoritoRepetido = favorito.some(item=> item.id === nuevoFavorito.id);
        let nuevaLista= [...favorito];
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito);
        } else {
            nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id);
        }

        return setFavorito(nuevaLista);
    }
    
    return { favorito, agregarFavorito };
}

export default FavoritosProvider;
export { FavoritosContext, useFavoritosContext };
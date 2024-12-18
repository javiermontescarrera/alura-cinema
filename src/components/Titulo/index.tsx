import styles from "./Titulo.module.css"

const Titulo = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    );
}

export default Titulo;
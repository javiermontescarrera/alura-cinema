import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

const Inicio = () => {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/javiermontescarrera/alura-cinema-api/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    return (
        <>
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    videos.map((video: {
                        id: number;
                        titulo: string;
                        capa: string;
                    }) => {
                            return <Card {...video} />
                        }
                    )
                }
            </section>
        </>
    )
}

export default Inicio;
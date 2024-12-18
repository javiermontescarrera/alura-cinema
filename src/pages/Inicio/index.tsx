import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { videoType } from "../../context/Favoritos";

const Inicio = () => {
    const [videos, setVideos] = useState<videoType[]>([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/javiermontescarrera/alura-cinema-api/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    return (
        <div className={styles.inicio}>
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    videos.map((video: videoType) => {
                            return <Card {...video} />
                        }
                    )
                }
            </section>
        </div>
    )
}

export default Inicio;
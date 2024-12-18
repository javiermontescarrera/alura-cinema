import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import NotFound from "../NotFound";
import { useState, useEffect } from "react";

const Player = () => {
    const [video, setVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect (() => {
        setIsLoading(true);
        fetch(`https://my-json-server.typicode.com/javiermontescarrera/alura-cinema-api/videos?id=${id}`)
            .then((response) => response.json())
            .then((data) => setVideo(data[0]))
            .finally(() => setIsLoading(false));
    }, [id]);

    // const video = videos.find(video => video.id === Number(id));

    if (isLoading) {
        return (
            <div className={styles.player}>
                <Titulo>
                    <h1>Loading...</h1>
                </Titulo>
            </div>
        );
    }
    
    if (!video) {
        return <NotFound />;
    }

    return (
        <div className={styles.player}>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                {/* <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/Xc-asT6O5M4?si=H2h0bsTEMgUWvibV" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                /> */}
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video?.link}
                    title={video?.titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                />
            </section>
        </div>
    );
}

export default Player;
import { Link } from "react-router-dom";
import styles from "./CabeceraLink.module.css";
import { PropsWithChildren } from "react";

const CabeceraLink = (props: PropsWithChildren<{url: string}>) => {
    const { url, children } = props
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabeceraLink;
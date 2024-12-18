import styles from "./Banner.module.css";

const Banner = ({img, color} : {img: string; color: string; }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
    >
        <div 
            className={styles.gradient} 
            style={{ background: `${color}`}}>
        </div>
    </div>
  );
};

export default Banner;

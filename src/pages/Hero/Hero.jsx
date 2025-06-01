import Lottie from "lottie-react";
import scrollDownAnimation from "../../assets/scrollDown.json";
import styles from "./Hero.module.css";
import gsap from "gsap";
export default function Hero({ onHandleScrollSection, heroRef }) {
  return (
    <section className={`snap-section`} ref={heroRef}>
      <div className={`${styles.nameContainer}`}>
        <h1 className={styles.heroTitle}>Felix Harris</h1>
        <p className={`text-2xl ${styles.typing1}`}>
          I'm a Front End Developer and a Designer.
        </p>
      </div>
      <Lottie
        style={{
          width: "64px",
          cursor: "pointer",
          position: "absolute",
          bottom: "50px",
        }}
        animationData={scrollDownAnimation}
        loop={true}
        autoplay={true}
        onClick={onHandleScrollSection}
      />
    </section>
  );
}

import { useRef, useState } from "react";
import styles from "./Button.module.css";
import arrowBack from "../../../assets/arrowBack.png";
import arrowNext from "../../../assets/arrowNext.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Button({
  children,
  withImageRight = false,
  withImageLeft = false,
  withText = true,
  imageLeft = arrowBack,
  imageRight = arrowNext,
  onHandleClick,
  additionalClassName = "",
}) {
  const [imagePrefix] = useState(imageLeft);
  const [imageSuffix] = useState(imageRight);
  const textRef = useRef(null);

  return (
    <button
      className={`flex flex-row gap-2 items-center cursor-pointer tracking-tight px-5 py-3 ${styles.btn} ${additionalClassName}`}
      style={{ fontSize: "24px", minWidth: "fit-content" }}
      onClick={onHandleClick}
      onMouseEnter={() => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }}
      onMouseLeave={() => {
        gsap.to(textRef.current, {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          duration: 0.3,
          ease: "power2.in",
        });
      }}
    >
      {withImageLeft && (
        <img src={imagePrefix} alt="image-left" className="prefix-image" />
      )}
      {withText && (
        <p ref={textRef} className="button-text" style={{ opacity: 0 }}>
          {children}
        </p>
      )}
      {withImageRight && (
        <img src={imageSuffix} alt="image-right" className="suffix-image" />
      )}
    </button>
  );
}

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
      className={`flex flex-row gap-4 items-center cursor-pointer tracking-tight ${styles.btn} ${additionalClassName}`}
      style={{ fontSize: "24px", minWidth: "fit-content" }}
      onClick={onHandleClick}
    >
      {withImageLeft && (
        <img
          src={imagePrefix}
          alt="image-left"
          className={`${styles.prefixImage}`}
        />
      )}
      {withText && (
        <p ref={textRef} className={`${styles.buttonText}`}>
          {children}
        </p>
      )}
      {withImageRight && (
        <img
          src={imageSuffix}
          alt="image-right"
          className={`${styles.suffixImage}`}
        />
      )}
    </button>
  );
}

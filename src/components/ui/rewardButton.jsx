import { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/wired-outline-3090-document-letter-morph-close.json";

export default function RewardButton({ text = "Enviar" }) {
  const lottieRef = useRef();

  return (
    <button
      type="submit"
      className="w-full h-[40px] bg-[#1a274d] flex items-center justify-center border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#1c4096] group"
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.goToAndStop(0, true)}
    >
      <span className="w-12 h-12 flex flex-col items-center justify-center relative">
        <div className="absolute w-[50%] h-[50%] z-[2]">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
          />
        </div>
      </span>

      <span className="w-[70px] h-full text-sm text-[#ffffff]  flex items-center justify-start font-semibold">
        {text}
      </span>
    </button>
  );
}

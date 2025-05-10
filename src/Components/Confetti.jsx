import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

function ConfettiWrapper() {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={200}
      recycle={true}
      gravity={0.2}
      wind={0.01}
    />
  );
}

export default ConfettiWrapper;

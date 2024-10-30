import { useNavigate } from "react-router-dom";

import Logo from "./Logo";

function LogoWithBackground() {
  const navigate = useNavigate();

  return (
    <button
      aria-label="Navigate to home"
      className="relative grid aspect-square h-full place-items-center rounded-r-[1.25rem] bg-lavender-indigo after:absolute after:bottom-0 after:h-1/2 after:w-full after:rounded-br-[1.25rem] after:rounded-tl-[1.25rem] after:bg-soft-violet lg:h-[6.5rem] lg:w-full"
      onClick={() => navigate("/")}
    >
      <Logo />
    </button>
  );
}

export default LogoWithBackground;

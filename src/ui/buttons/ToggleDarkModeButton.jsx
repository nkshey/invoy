import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

function ToggleDarkModeButton({ darkMode, setDarkMode }) {
  return (
    <button
      aria-label="Toggle page theme (light or dark)"
      className="group"
      onClick={() => setDarkMode((cur) => !cur)}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ToggleDarkModeButton;

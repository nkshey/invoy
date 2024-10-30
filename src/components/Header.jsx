import AvatarContainer from "./AvatarContainer";
import LogoWithBackground from "../ui/logo/LogoWithBackground";
import ToggleDarkModeButton from "../ui/buttons/ToggleDarkModeButton";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-[99999] flex h-[4.5rem] bg-[#373B53] dark:bg-deep-midnight md:h-20 lg:fixed lg:left-0 lg:top-0 lg:min-h-dvh lg:w-[6.5rem] lg:flex-col lg:rounded-r-[1.25rem]">
      <div className="flex flex-grow items-center justify-between lg:flex-col">
        <LogoWithBackground />
        <ToggleDarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <AvatarContainer />
    </header>
  );
}

export default Header;

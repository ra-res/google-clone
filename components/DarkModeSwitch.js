import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const DarkModeSwitch = ({ darkMode, setDarkModeAndCookie, className }) => {
  return (
    <div>
      {darkMode ? (
        <SunIcon
          onClick={setDarkModeAndCookie}
          className={`h-5 cursor-pointer ${className}`}
        />
      ) : (
        <MoonIcon
          onClick={setDarkModeAndCookie}
          className={`h-5 cursor-pointer ${className}`}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;

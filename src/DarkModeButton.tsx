import { Button } from "react-bootstrap";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

interface DarkModeButtonProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DarkModeButton({
  isDarkMode,
  setIsDarkMode,
}: DarkModeButtonProps) {
  return (
    <>
      <Button
        variant="secondary"
        style={{
          borderRadius: "100%",
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <FiSun style={{ marginBottom: "4px" }} />
        ) : (
          <BsMoonFill style={{ marginBottom: "4px" }} />
        )}
      </Button>
      <img
        className="dark-light-mode-text"
        src={`assets/${isDarkMode ? "light" : "dark"}-mode-${
          innerWidth <= 768 ? "mobile" : "web"
        }.png`}
        alt="text 'light mode'"
      />
    </>
  );
}

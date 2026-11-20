import MoonIcon from "../MoonIcon.jsx";
import SunIcon from "../SunIcon.jsx";
import "./Header.css";

export default function Header({ themeMode = "light", toggleTheme }) {
    return (
        <header>
            <h1>Shopping <span>Cart</span></h1>
            <button onClick={toggleTheme}>
                {themeMode === "light" ?
                    <SunIcon /> :
                    <MoonIcon />
                }
            </button>
        </header>
    );
}
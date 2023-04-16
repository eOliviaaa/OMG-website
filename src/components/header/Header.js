import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <figure>
                <a href={"/"}><img src="./img/omg_logo_simple.png" alt="OsloMet Gaming logo" /></a>
                <a href={"/"}>
                    <div className="header-title">
                        <div>Oslo<span>M</span>et</div>
                        <div>Gaming</div>
                    </div>
                </a>
            </figure>

            <nav>
                <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={`burgerButton ${menuOpen ? 'change' : ''}`}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>

                <div id="mySidenav" className={`sidenav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
            </nav>

            <div className="langButtons">
                <button type="button" onClick={() => {document.documentElement.lang = 'nb'}} className="langNoButton">NO</button>
                <button type="button" onClick={() => {document.documentElement.lang = 'en'}} className="langEnButton">EN</button>
            </div>
        </header>
    );
}

export default Header;
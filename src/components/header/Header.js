
const Header = () => {
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

            <div className="langButtons">
                <button type="button" onClick={() => {document.documentElement.lang = 'nb'}} className="langNoButton">NO</button>
                <button type="button" onClick={() => {document.documentElement.lang = 'en'}} className="langEnButton">EN</button>
            </div>
        </header>
    );
}

export default Header;
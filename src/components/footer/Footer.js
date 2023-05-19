export default function Footer() {
    return (
        <footer>
            <div>text1</div>
            <div>text2</div>
            <div className={"socials"}>
                <ul>
                    <li><a href={"https://voip.oslometgaming.no"}><img src="../../img/discord-logo-blue.svg" alt="Discord logo" height="30rem"/></a></li>
                    <li><a href={"https://www.facebook.com/OsloMetGaming"}><img src="../../img/Facebook-logo-Blue-512.png" alt="Facebook logo" height="35rem"/>Facebook</a></li>
                    <li><a href={"https://twitter.com/OsloMetGaming"}><img src="../../img/Twitter-circle-blue.svg" alt="Twitter logo" height="35rem"/>Twitter</a></li>
                    <li><a href={"https://www.instagram.com/oslometgaming/"}><img src="../../img/Instagram_Glyph_Gradient_RGB.svg" alt="Instagram logo" height="34rem"/>Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}
import Footer from "../components/footer/Footer.js";
import Welcome from "../components/home-main/Welcome.js";
import Events from "../components/home-main/Events.js"
import BoardMembers from "../components/home-main/BoardMembers.js"
import GeneralInfo from "../components/home-main/GeneralInfo.js"

export default function Home() {
    return (
        <body>
            <main>
                <Welcome />
                <Events />
                <GeneralInfo />
                <BoardMembers />
            </main>
            <Footer />
        </body>

    );
}

import Footer from "../components/footer/Footer.js";
import Welcome from "../components/home-main/Welcome.js";
import Events from "../components/home-main/Events.js"

export default function Home() {
    return (
        <body>
            <main>
                <div>
                    <Welcome />
                </div>
                <div>
                    <Events />
                </div>
            </main>
            <Footer />
        </body>

    );
}

import Footer from "../components/footer/Footer.js";
// import EventCarousel from "../components/home-main/EventCarousel.js";
import Welcome from "../components/home-main/Welcome.js";
import Events from "../components/home-main/Events.js"

export default function Home() {
    return (
        <body>
            <main>
                <Welcome />
                <Events />
            </main>
            <Footer />
        </body>

    );
}

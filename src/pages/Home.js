import Welcome from "../components/home-main/Welcome.js";
import Events from "../components/home-main/Events.js"
import BoardMembers from "../components/home-main/BoardMembers.js"
import GeneralInfo from "../components/home-main/GeneralInfo.js"

import WelcomeMobile from "../components/home-main-phone/Welcome.js";
import EventsMobile from "../components/home-main-phone/Events.js";
import GeneralInfoMobile from "../components/home-main-phone/GeneralInfo.js"
import BoardMembersMobile from "../components/home-main-phone/BoardMembers.js"

import WelcomeTablet from "../components/home-main-tablet/Welcome.js";
import EventsTablet from "../components/home-main-tablet/Events.js";
import GeneralInfoTablet from "../components/home-main-tablet/GeneralInfo.js"
import BoardMembersTablet from "../components/home-main-tablet/BoardMembers.js"

export default function Home() {
    const mobile = window.matchMedia('(max-width: 600px)');
    let mobileView = mobile.matches;

    const tablet = window.matchMedia('(max-width: 1200px)');
    let tabletView = tablet.matches;

    if (mobileView) {
        return (
            <body>
                <main>
                    <WelcomeMobile />
                    <EventsMobile />
                    <GeneralInfoMobile />
                    <BoardMembersMobile />
                </main>
            </body>
        );
    }
    if (tabletView) {
        return (
            <body>
            <main>
                <WelcomeTablet />
                <EventsTablet />
                <GeneralInfoTablet />
                <BoardMembersTablet />
            </main>
            </body>
        );
    }
    if (!mobileView && !tabletView){
        return (
            <body>
                <main>
                    <Welcome />
                    <Events />
                    <GeneralInfo />
                    <BoardMembers />
                </main>
            </body>

        );
    }
}

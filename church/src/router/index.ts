import HomeView from "../comps/views/HomeView/index"
import AboutView from "../comps/views/AboutView/index"
import GuestsView from "../comps/views/GuestView"
import ConnectView from "../comps/views/ConnectView/index"
import CalendarView from "../comps/views/CalendarView/index"
import VideosView from "../comps/views/VideosView/index"
import GivingView from "../comps/views/GivingView/index"
import NotFoundView from "../comps/views/NowFoundView/index"
import TextVIew from "../comps/views/TextVIew"
import Logo from "../comps/svgs/Logo"
import YoutubeLink from "../comps/socialLinks/YoutubeLink"
import InstagramLogo from "../comps/svgs/InstagramLogo"
//Label is for nav bar idk if I need the title yet
const routes = [
    { path: "/", comp: HomeView, title: "Home", label: "Home", inNav: false },
    { path: "/about", comp: AboutView, title: "About", label: "About", inNav: true },
    { path: "/guests", comp: GuestsView, title: "Guests", label: "Guests", inNav: false },
    { path: "/connect", comp: ConnectView, title: "Connect", label: "Connect", inNav: true },
    { path: "/calendar", comp: CalendarView, title: "Calendar", label: "Calendar", inNav: false },
    { path: "/videos", comp: VideosView, title: "Videos", label: "Videos", inNav: false },
    { path: "/giving", comp: GivingView, title: "Giving", label: "Giving", inNav: true },
    { path: "/svgTest", comp: InstagramLogo, title: "SVG", label: "SVG", inNav: false},
    { path: "/test", comp: TextVIew, title: "TEST", label: "TEST", inNav: false},


    { path: "*", comp: NotFoundView, inNav: false},
]

export default routes
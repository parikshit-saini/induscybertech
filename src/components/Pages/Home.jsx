import "./pages.scss";
import { Header } from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Common/Footer/Footer";

export const Home = () => {
    return <div className="website">
        <Header />
        <Outlet />
        <Footer />
    </div>
}
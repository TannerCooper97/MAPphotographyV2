import { Outlet } from "react-router-dom";
import MainNavigation from "../components/GUI/NavBar";
import "../styles/Root.scss";
import Footer from "../components/GUI/footer";

function RootLayout(){
    return(
        <>
        <div className="app-container">
        <MainNavigation/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </div>
       </>
    )
}

export default RootLayout;
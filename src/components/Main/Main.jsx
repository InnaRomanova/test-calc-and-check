import Calc from "../Calc/Calc";
import { useLocation } from "react-router-dom";
import Checbox from "../Checbox/Checbox";
import "./Main.css";


function Main() {
    const location = useLocation();

    return (
        <main className="content">
            {location.pathname === "/" ? <Calc /> : <Checbox />}
        </main>
    )
}

export default Main;
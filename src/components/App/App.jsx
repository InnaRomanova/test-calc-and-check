import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Checbox from '../Checbox/Checbox';
import Calc from '../Calc/Calc';

function App() {

    return (
        <div className="page">
            <div className="page__content">
                <Routes>
                    <Route
                        exac
                        path="/"
                        element={
                            <>
                                <Header />
                                <Main />
                            </>
                        }
                    ></Route>


                    <Route path="/checbox" element={
                        <>
                            <Header />
                            <Main />
                        </>} >
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/inicial";



const RotasPT = () => {

    return (
        <BrowserRouter>
                <Routes >
                    <Route element={<Home/>} path="/" exact/>
                </Routes>
        </BrowserRouter>
    )
}

export default RotasPT;
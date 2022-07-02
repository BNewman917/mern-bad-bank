import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./components/Navbar";
import { Home } from "./pages/Home.jsx";
import { CreateAccount } from "./pages/CreateAccount";
import { Deposit } from "./pages/Deposit";
import { Withdraw } from "./pages/Withdraw";
import { Login } from "./pages/Login";
import { UserData } from "./pages/UserData";
import { Balance } from "./pages/Balance.jsx";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/account" element={<CreateAccount />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/userdata" element={<UserData />} />
                </Routes>
            </Router>
            <ToastContainer />
        </>
    );
}

export default App;

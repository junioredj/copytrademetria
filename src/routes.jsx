import { Fragment, useState } from "react";
import Modal from 'react-modal';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "./components/ProtectedLayout";
import { RedefinedPasswordModal } from './components/RedefinedPasswordModal';
import { AuthProvider } from "./context/AuthProvider/auth";

import { DashboardApp } from './pages/DashboardApp';
import { Home } from "./pages/Home";
import { Imports } from "./pages/Imports";
import { Profile } from "./pages/Profile";
import { Reports } from "./pages/Reports";
import { Adjustments } from "./pages/Reports/Adjustments";
import { Historical } from "./pages/Reports/Historical";
import { Intraday } from "./pages/Reports/Intraday";
import { Kpis } from "./pages/Reports/Kpis";
import { Order } from "./pages/Reports/Order";
import { Portfolio } from "./pages/Reports/Portfolio";
import { Simulator } from "./pages/Reports/Simulator";
import { TradeCalendar } from "./pages/Reports/TradeCalendar";
import { Trades } from "./pages/Reports/Trades";
import { Watchlist } from "./pages/Reports/Watchlist";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

Modal.setAppElement('#root');


export function RoutesApp(){

    const [redefinedPasswordModalIsOpen, setRedefinedPasswordModalIsOpen] = useState(false);

    const handleOpenRedefinedPasswordModal = () => {
      setRedefinedPasswordModalIsOpen(true);
    }
  
    const handleCloseRedefinedPasswordModal = () => {
      setRedefinedPasswordModalIsOpen(false);
    }

    return (
        <AuthProvider>
            <RedefinedPasswordModal 
                isOpen={redefinedPasswordModalIsOpen} 
                onRequestClose={handleCloseRedefinedPasswordModal} 
            />
            <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route path="/signin" element={<SignIn openModal={handleOpenRedefinedPasswordModal}/>} />
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="*" element={<Navigate to='/' />} />
                        
                        <Route 
                            path="/" 
                            element={<ProtectedLayout><Home/></ProtectedLayout>}  
                        >
                            <Route path="/" element={<DashboardApp/>} />
                            <Route path="/perfil" element={<Profile/>} />
                            <Route path="/importar" element={<Imports/>} />

                            <Route path="/" element={<Reports/>}>
                                <Route path="/relatorios/trades" element={<Trades/>} />
                                <Route path="/relatorios/ordens" element={<Order/>} />
                                <Route path="/relatorios/desempenho" element={<Kpis/>} />
                                <Route path="/relatorios/simulador" element={<Simulator/>} />
                                <Route path="/relatorios/historico" element={<Historical/>} />
                                <Route path="/relatorios/portfolio" element={<Portfolio/>} />
                                <Route path="/relatorios/daytrader" element={<Intraday/>} />
                                <Route path="/relatorios/lancamentos" element={<Adjustments/>} />
                                <Route path="/relatorios/calendario-trades" element={<TradeCalendar/>} />
                                <Route path="/relatorios/ativos" element={<Watchlist/>} />
                            </Route>
                        </Route>
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </AuthProvider>
      
    );
}
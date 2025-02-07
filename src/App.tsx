import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Qbank from "./pages/Qbank";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css';
import React from "react";
import { theme } from './shared/theme';
import { Outlet } from "react-router-dom"; // Import Outlet
import QbankPackQuestion from "./components/qbank/QbankPackQuestion";

const queryClient = new QueryClient();


const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="qbank" element={<Qbank />} />
                <Route path="auth" element={<Auth />} />
                <Route path="logout/" element={<Auth/>} />
                <Route path="profile" element={<Profile />} />
                <Route path="qbank/pack/:id" element={<QbankPackQuestion/>} />
              </Route>
              <Route path="*" element={<div> Page Not Found</div>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;

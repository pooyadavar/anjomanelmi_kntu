import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Question from "./pages/Question";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css';
import { theme } from './shared/theme';
import { Outlet } from "react-router-dom"; // Import Outlet

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
                <Route path="question" element={<Question />} />
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

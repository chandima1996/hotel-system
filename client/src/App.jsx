import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured"; // Import කළා
import Stats from "./components/Stats";
import ServiceMarquee from "./components/ServiceMarquee";
import Footer from "./components/Footer";

import { ThemeContextProvider } from "./context/ThemeContext";
import { CurrencyContextProvider } from "./context/CurrencyContext";

function App() {
  return (
    <ThemeContextProvider>
      <CurrencyContextProvider>
        <BrowserRouter>
          <div className="min-h-screen w-full bg-white dark:bg-[#020617] text-slate-900 dark:text-foreground antialiased font-['Outfit'] transition-colors duration-300">
            <Navbar />

            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Featured />
                      <Stats />
                      <ServiceMarquee />
                    </>
                  }
                />

                <Route
                  path="/hotels"
                  element={
                    <div className="pt-32 text-center text-2xl">
                      Find Hotels Page
                    </div>
                  }
                />
                <Route
                  path="/offers"
                  element={
                    <div className="pt-32 text-center text-2xl">
                      Offers Page
                    </div>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CurrencyContextProvider>
    </ThemeContextProvider>
  );
}

export default App;

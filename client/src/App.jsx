import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured"; // Import කළා

function App() {
  return (
    <BrowserRouter>
      <div className="dark min-h-screen w-full bg-background text-foreground antialiased font-['Outfit']">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Featured />
                  <div className="py-10 text-center text-sm text-gray-500">
                    © 2024 ORRIO. Future of Hospitality.
                  </div>
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
                <div className="pt-32 text-center text-2xl">Offers Page</div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

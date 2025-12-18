import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      {/* මචං, මෙතන 'dark' class එක දැම්මම shadcn එක දන්නවා අපි ඉල්ලන්නේ Dark Theme එක කියලා.
        bg-background කියන්නේ CSS එකේ අපි හදපු Dark Navy පාට.
        text-foreground කියන්නේ සුදු පාට අකුරු.
      */}
      <div className="w-full min-h-screen font-sans antialiased dark bg-background text-foreground">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Pages */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/* අපි පස්සේ මෙතනට තව Sections දාමු (Featured Hotels, etc.) */}
                  <div className="container py-20 mx-auto text-center">
                    <h2 className="mb-4 text-3xl font-bold text-primary">
                      Why Choose Orrio?
                    </h2>
                    <p className="text-muted-foreground">
                      Experience the next generation of hospitality with
                      AI-driven personalization.
                    </p>
                  </div>
                </>
              }
            />

            <Route
              path="/hotels"
              element={
                <div className="pt-32 text-2xl text-center">
                  Find Hotels Page (Coming Soon)
                </div>
              }
            />
            <Route
              path="/offers"
              element={
                <div className="pt-32 text-2xl text-center">
                  Offers Page (Coming Soon)
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

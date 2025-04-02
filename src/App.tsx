import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-xl mx-auto container px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
import Navbar from "./components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      {/* <AppRoutes /> */}
    </BrowserRouter>
  );
}

export default App;
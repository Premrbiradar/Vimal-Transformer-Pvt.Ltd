import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/App.Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
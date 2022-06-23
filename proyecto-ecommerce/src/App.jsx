import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomeScreen } from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import VistaProducto from "./components/vistaProducto/VistaProducto";

const App = () => {
  return(
    <Router>
     <Navbar/>
      <Routes>
        <Route index path="/" element={<HomeScreen/>}></Route>
        <Route path="/" element={<VistaProducto/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;



import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomeScreen } from "./components/home/Home"
import { Detalles }  from './pages/detalles/Detalles'
import Navbar from "./components/navbar/Navbar"
import VistaProducto from "./components/vistaProducto/VistaProducto";

const App = () => {
  return(
    <Router>
     <Navbar/>
      <Routes>
        <Route index path="/" element={<HomeScreen/>}></Route>
        <Route path="/" element={<VistaProducto/>}></Route>
        <Route
          path='/:id'
          element={ <Detalles/> } 
        />
      </Routes>
    </Router>
  )
}

export default App;


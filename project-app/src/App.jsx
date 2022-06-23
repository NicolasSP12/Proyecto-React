import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Detalles }  from './pages/detalles/Detalles'
import { HomeScreen } from "./pages/home/Home"
import './App.css'
import 'bootstrap'

function App() {
  return (
    <Router>
      <Routes>
        <Route index 
          path="/" 
          element={<HomeScreen/>}>
        </Route>
        <Route
          path=':id'
          element={ <Detalles/> } 
        />
      </Routes>
    </Router>
  );
}

export default App;

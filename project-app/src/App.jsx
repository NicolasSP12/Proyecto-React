import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { Detalles }  from './pages/detalles/Detalles'
import { HomeScreen } from "./pages/home/Home"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route index 
        path="/" 
        element={<HomeScreen foto={(id) => console.log("id desde comp hijo", id)} name="Holis"/>}></Route>
        <Route
        path='detalles'
        element={ <Detalles/> } />
      </Routes>
    </Router>
  );
}

export default App;

import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { detalles as Detalles} from './pages/detalles'
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route>
          1
        </Route>
        <Route
        path='InfoDetallada'
        element={ <Detalles/> } />
      </Routes>
    </Router>
  );
}

export default App;

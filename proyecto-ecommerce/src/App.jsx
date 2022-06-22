import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomeScreen } from "./components/home/Home"


const App = () => {
  return(
    <Router>
      <Routes>
        <Route index path="/" element={<HomeScreen foto={(id) => console.log("id desde comp hijo", id)} name="Holis"/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;

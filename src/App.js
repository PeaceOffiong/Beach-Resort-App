import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Rooms from './pages/Rooms';
import Singleroom from './pages/Singleroom';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="rooms" element={<Rooms />}></Route>
        <Route path="/singleroom/:id" element={<Singleroom/>}/>
      </Routes>
    </main>
  );
}

export default App;

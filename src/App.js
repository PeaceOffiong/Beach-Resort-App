import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Rooms from './pages/Rooms';
import Singleroom from './pages/Singleroom';
import Navbar from "./components/Navbar";
import "./featuredRooms.css";
import "./singleRoom.css";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rooms" element={<Rooms />}></Route>
        <Route path="/room/:id" element={<Singleroom />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </main>
  );
}

export default App;

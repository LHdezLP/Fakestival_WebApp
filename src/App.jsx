import { BrowserRouter, Routes, Route} from "react-router-dom"
import Tickets from "./pages/tickets-camping/Tickets.jsx";
import Mainpage from "./pages/mainpage/Mainpage.jsx";
import BandInfo from "./pages/band-info/BandInfo.jsx";
import LineUp from "./pages/line-up/LineUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Mainpage />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/band-info/:id" element={<BandInfo />} />
        <Route path="*" element={<Mainpage />} />
        <Route path="/line-up" element={<LineUp />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Tickets from "./pages/tickets-camping/Tickets.jsx";
import Mainpage from "./pages/mainpage/Mainpage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Mainpage />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App

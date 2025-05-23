import { BrowserRouter, Routes, Route} from "react-router-dom"
import Tickets from "./pages/tickets-camping/Tickets.jsx";
import Mainpage from "./pages/mainpage/Mainpage.jsx";
import BandInfo from "./pages/band-info/BandInfo.jsx";
import LineUp from "./pages/line-up/LineUp.jsx";
import SignIn from "./components/login/signin/SignIn.jsx";
import SignUp from "./components/login/signup/SignUp.jsx";
import ReportPage from "./pages/report-page/ReportPage.jsx";
import CustomLineUp from "./pages/line-up/children/CustomLineUp.jsx";
import HorariosPage from "./testeo_horarios/page/HorariosPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Mainpage />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/band-info/:id" element={<BandInfo />} />
        <Route path="*" element={<Mainpage />} />
        <Route path="/line-up" element={<LineUp />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/reports" element={<ReportPage/>} />
        <Route path="/custom-lineup" element={<CustomLineUp/>} />
        <Route path="/saved-lineup" element={<HorariosPage/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App

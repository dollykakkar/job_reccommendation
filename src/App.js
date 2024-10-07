import { Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { AboutUs } from "./Pages/AboutUs";
import { LandingPage } from "./Pages/LandingPage";
import { MyDashboard } from "./Pages/Dashboard/MyDashboard";
import { LogIn } from "./Pages/LogIn";
import { SignUp } from "./Pages/SignUp";
import { ResetPassword } from "./Pages/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<MyDashboard/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/resetpassword" element={<ResetPassword />} /> 
      </Routes>
      <Footer />

    </>
  );
}

export default App;

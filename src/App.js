import { Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { AboutUs } from "./Pages/AboutUs";
import { LandingPage } from "./Pages/LandingPage";
import { MyDashboard } from "./Pages/Dashboard/MyDashboard";
import { LogIn } from "./Pages/LogIn";
import { SignUp } from "./Pages/SignUp";
import { ResetPassword } from "./Pages/ResetPassword";
import NavBar from "./Components/NavBar";
import MyJobs from "./Pages/Dashboard/MyJobs";
import Setting from "./Pages/Dashboard/Setting";
import ContactUs from "./Pages/ContactUs";
import SubmitJob from "./Pages/Submitjob/Submit_job";

function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<MyDashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/settings" element={<Setting/>}/>
          <Route path="/jobs" element={<MyJobs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/submitjob" element={<SubmitJob/>}/>
        </Routes>
       
        <Footer />
      </>
    
  );
}

export default App;

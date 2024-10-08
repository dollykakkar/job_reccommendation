

import { Route, Router, Routes } from "react-router-dom";
import SubmitJob from "./Pages/Submitjob/Submit_job";
// import { Footer } from "./Components/Footer";
// import NavBar from "./Components/NavBar";
// import { Footer } from "./Components/Footer";
// import { AboutUs } from "./Pages/AboutUs";
// import { ChooseOneHireOrGetHired } from "./Pages/ChooseOneHireOrGetHired";
// import { FeaturedEmployers } from "./Pages/FeaturedEmployers";
// import { HeroSection } from "./Pages/HeroSection";
// import { JobCategory } from "./Pages/JobCategory";
// import { JobType } from "./Pages/JobType";
// import { LatestJobs } from "./Pages/LatestJobs";
// import { NewJobs } from "./Pages/NewJobs";
// import { RecentJobs } from "./Pages/RecentJobs";
// import { TopCompanies } from "./Pages/TopCompanies";
// import FirstDashboard from "./Pages/Dashboard.js/FirstDashboard";
// import SideBar from "./Pages/Dashboard.js/SideBar";

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
        </Routes>
        {/* <ContactUs/> */}
        {/* <MyJobs/> */}
        {/* <Setting/> */}
        <Footer />
      </>
    <>

      {/* <HeroSection/>
      <JobCategory/>
      <RecentJobs/>
      <JobType/>
      <FeaturedEmployers/>
      <LatestJobs/>
      <TopCompanies/>
      <NewJobs/>
      <ChooseOneHireOrGetHired/>
      <Footer/> */}
      {/* <AboutUs/> */}
        <SubmitJob/>
      
      {/* <AboutUs/> */}
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

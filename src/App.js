import { Route, Router, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { AboutUs } from "./Pages/AboutUs";
import { ChooseOneHireOrGetHired } from "./Pages/ChooseOneHireOrGetHired";
import { FeaturedEmployers } from "./Pages/FeaturedEmployers";
import { HeroSection } from "./Pages/HeroSection";
import { JobCategory } from "./Pages/JobCategory";
import { JobType } from "./Pages/JobType";
import { LatestJobs } from "./Pages/LatestJobs";
import { NewJobs } from "./Pages/NewJobs";
import { RecentJobs } from "./Pages/RecentJobs";
import { TopCompanies } from "./Pages/TopCompanies";
import FirstDashboard from "./Pages/Dashboard.js/FirstDashboard";
import SideBar from "./Pages/Dashboard.js/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      {/* <FirstDashboard/> */}
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
    </div>
      
  );
}

export default App;
